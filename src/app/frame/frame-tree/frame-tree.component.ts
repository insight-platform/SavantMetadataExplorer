import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IFrameJson, IFrameJsonObject } from '../../api/models/span';
import { isNil, uniq } from 'lodash';
import { HierarchyNode } from 'd3';
import * as d3 from 'd3';
import { deepPurple, getColor } from '../../utils/color';
import { INodeObject } from '../node-object';

@Component({
  selector: 'sf-frame-tree',
  templateUrl: './frame-tree.component.html',
  styleUrls: ['./frame-tree.component.scss']
})
export class FrameTreeComponent implements OnChanges {
  @Input() frame: IFrameJson;
  @Output() onNodeSelected = new EventEmitter<INodeObject>();
  objectGroups: { namespace: string, label: string }[] = [];
  selectedNode: INodeObject | undefined = undefined;
  nodeWidth = 220;
  nodeHeight = 200;

  private _rectWidth = 200;
  private _rectHeight = 65;

  ngOnChanges(changes: SimpleChanges) {
    if (this.frame && 'frame' in changes) {
      this.objectGroups = uniq(this.frame.objects.map(_ => _.namespace))
        .reduce((res: any[], namespace: string) => [
          ...res,
          ...uniq(this.frame.objects.map(_ => _.label)).map(label => ({namespace, label})),
        ], [])
      this._createSvg(...this._createTree(this._createDataNode(this.frame)));
    }
  }

  private _createDataNode(frame: IFrameJson): INodeObject {
    const objectTreeData = frame.objects.filter(object => isNil(object.parent))
      .map(object => ({...object, children: []}));

    const findObject = (objects: INodeObject[], frameJsonObject: IFrameJsonObject): INodeObject | null => {
      const parentObject = objects.find(_ => _.id === frameJsonObject.parent);
      if (parentObject) {
        return parentObject
      } else {
        for (const object of objects) {
          const foundObject = findObject(object.children, frameJsonObject);
          if (foundObject) {
            return foundObject;
          }
        }
        return null;
      }
    };

    frame.objects
      .sort((a, b) => (a.parent || 0) - (b.parent || 0))
      .map(object => ({...object, children: []}))
      .forEach(object => {
        if (!isNil(object.parent)) {
          findObject(objectTreeData, object)?.children.push(object);
        }
      });

    return {
      attributes: this.frame.attributes,
      frame: '',
      isFrame: true,
      frameValue: this.frame,
      id: -1,
      label: '',
      namespace: '',
      parent: null,
      children: objectTreeData,
    };
  }

  private _createTree(treeData: INodeObject): [treemapNode: HierarchyNode<INodeObject>, width: number] {
    const treemap = d3.tree<INodeObject>().nodeSize([this.nodeWidth, this.nodeHeight]);
    const nodes = d3.hierarchy<INodeObject>(
      treeData,
      d => d.children);

    const treemapNode = treemap(nodes);
    const levelNodeCounts: number[] = [];
    let maxX = 0;

    treemapNode.eachAfter<HierarchyNode<INodeObject>>(d => {
      levelNodeCounts[d.depth] = levelNodeCounts[d.depth] ? levelNodeCounts[d.depth] + 1 : 1;
    });
    treemapNode.eachBefore<HierarchyNode<INodeObject>>(d => {
      d.x = (d.depth - treemapNode.depth) * this.nodeWidth + (levelNodeCounts[d.depth] - 1) * this.nodeWidth;
      maxX = d.x > maxX ? d.x : maxX;
      levelNodeCounts[d.depth] -= 1;
    })
    return [ treemapNode, maxX ];
  }

  private _createSvg(treemapNodes: HierarchyNode<INodeObject>, treeWidth: number): void {
    const svg = d3.select('#treeChart')
      .append('svg')
      .attr('height',(treemapNodes.height + 1) * this.nodeHeight + 'px')
      .attr('width', (treeWidth + this.nodeWidth) + 'px')
    const g = svg.append('g');
    g.selectAll('.link')
      .data(treemapNodes.descendants().slice(1))
      .enter().append('path')
      .attr('class', 'link')
      .style('stroke', d => d.parent ? this._getColor(d.parent.data, 1) : '#ddd')
      .style('stroke-width', '2px')
      .style('fill', 'transparent')
      .attr('d', d => {
        if (d.parent) {
          const x = [d.parent['x'] + this._rectWidth / 2, d.parent['y'] + this._rectHeight];
          const [x2, y2] = [d['x'] + this._rectWidth / 2, d['y']];
          return 'M' + x[0] + ',' + x[1]
            + 'C'
            + ' ' + (x[0] + (x2 - x[0]) / 3) + ',' + x[1]
            + ' ' + (x2 - (x2 - x[0]) / 3) + ',' + y2
            + ' ' + x2 + ',' + y2;
        }
        return '';
      });
    const node = g.selectAll('.node')
      .data(treemapNodes.descendants())
      .enter().append('g')
      .attr('class', d => 'node' + (d.children ? ' node--internal' : ' node--leaf') + (d.data.id != -1 ? ' object': ' frame'))
      .attr('id', d => 'node' + d.data.id)
      .attr('transform', d => {
        return 'translate(' + d['x'] + ',' + d['y'] + ')';
      });

    let currentColor = '#ddd';
    let textColor = '#000';
    const toggleColor = (event, d) => {
      if (!this.selectedNode) {
        // select node
        this.selectedNode = d.data;
        currentColor = deepPurple + '80';
        textColor = '#fff';
      } else if (this.selectedNode.id === d.data.id) {
        // deselect node
        this.selectedNode = undefined;
        currentColor = this._getColor(d.data);
        textColor = '#000';
      } else {
        // switch node
        d3.select('#node' + this.selectedNode.id).style('fill', '#000');
        d3.select('#circle' + this.selectedNode.id).style('fill', this._getColor(this.selectedNode));
        // this._cdr.detectChanges();
        this.selectedNode = d.data;
        currentColor = deepPurple + '80';
        textColor = '#fff';
      }
      // this._cdr.detectChanges();
      d3.select('#node' + d.data.id).style('fill', textColor);
      d3.select('#circle' + d.data.id).style('fill', currentColor);
      this.onNodeSelected.emit(this.selectedNode);
    };
    node
      .append('rect')
      .attr('width', this._rectWidth)
      .attr('height', this._rectHeight)
      .on('click', toggleColor)
      .attr('id', d => 'circle' + d.data.id)
      .style('stroke', d => this._getColor(d.data, 1))
      .style('stroke-width', '2px')
      .style('fill', d => this._getColor(d.data));

    g.selectAll('.node.frame')
      .append('text')
      .attr('x', 100)
      .attr('y', 35)
      .style('text-anchor', 'middle')
      .on('click', (event) => {
        console.log(event)
      })
      .text('FRAME');
    const text = g.selectAll('.node.object')
      .data(treemapNodes.descendants().slice(1))
      .append('text')
      .attr('x', 20)
      .attr('y', 20)
      .style('text-anchor', 'start')
      .on('click', (event) => {
        console.log(event)
      });
    text
      .append('tspan')
      //.style('text-anchor', 'middle')
      .attr('x', 20)
      .attr('dy', 0)
      .text(d => 'ID: ' + d.data.id);
    text
      .append('tspan')
      //.style('text-anchor', 'middle')
      .attr('x', 20)
      .attr('dy', '1.2em')
      .text(d => 'Namespace: ' + d.data.namespace);
    text
      .append('tspan')
      //.style('text-anchor', 'middle')
      .attr('x', 20)
      .attr('dy', '1.2em')
      .text(d => 'Label: ' + d.data.label);
  }

  private _getColor(data: INodeObject, alfa = 0.5): string {
    const groupIndex = this.objectGroups
      .findIndex(group => group.namespace === data.namespace && data.label === group.label);
    if (groupIndex === -1) {
      return getColor(-1, alfa);
    }

    return getColor((groupIndex + 1) / this.objectGroups.length, alfa);
  }
}
