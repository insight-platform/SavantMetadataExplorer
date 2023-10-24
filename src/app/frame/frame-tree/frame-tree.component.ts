import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IFrameJson, IFrameJsonObject } from 'sf';
import { isNil, uniq } from 'lodash';
import { HierarchyNode } from 'd3';
import * as d3 from 'd3';
import { deepPurple, getColor } from '../../utils/color';
import { INodeObject } from '../node-object';
import { FrameObjectsDifference, getFrameObjectsDifference } from '../../utils/get-difference';

@Component({
  selector: 'sf-frame-tree',
  templateUrl: './frame-tree.component.html',
  styleUrls: ['./frame-tree.component.scss'],
})
export class FrameTreeComponent implements OnChanges {
  @Input() frame: IFrameJson | undefined;
  @Input() comparedFrame: IFrameJson | undefined;
  @Input() objectFilter: { namespace: string; label: string }[]
  @Output() nodeSelected = new EventEmitter<INodeObject>();
  objectGroups: { namespace: string, label: string }[] = [];
  selectedNode: INodeObject | undefined = undefined;
  frameObjectsDifference: FrameObjectsDifference | undefined
  nodeWidth = 220;
  nodeHeight = 200;
  private _addIcon: SVGElement;
  private _removeIcon;
  private _updateIcon;

  private _rectWidth = 200;
  private _rectHeight = 65;

  ngOnChanges(changes: SimpleChanges) {
    if ('frame' in changes) {
      if (this.frame) {
        this.objectGroups = uniq(this.frame.objects.map(_ => _.namespace))
          .sort((g1, g2) => g1.localeCompare(g2))
          .reduce((res: any[], namespace: string) => [
            ...res,
            // eslint-disable-next-line
            ...uniq(this.frame?.objects.map(_ => _.label)).map(label => ({namespace, label})),
          ], [])
        this._clearSvg();
        this._createSvg(...this._createTree(this._createDataNode(this.frame)));
      } else {
        this._clearSvg();
      }
    }
    if ('comparedFrame' in changes) {
      this.frameObjectsDifference = this.comparedFrame && this.frame ? getFrameObjectsDifference(this.frame.objects, this.comparedFrame.objects) : undefined;
    }
    if ('objectFilter' in changes && this.objectFilter || 'comparedFrame' in changes) {
      if (this.frame) {
        this._clearSvg();
        this._createSvg(...this._createTree(this._createDataNode(this.frame)));
      }
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

    if (this.frameObjectsDifference && this.frameObjectsDifference.addedObjectIds.length && this.comparedFrame) {
      // @ts-ignore
      const addedObjects = this.comparedFrame.objects.filter(object => this.frameObjectsDifference.addedObjectIds.indexOf(object.id) !== -1);
      addedObjects.map(object => ({...object, children: []}))
        .forEach(object => {
          if (!isNil(object.parent)) {
            findObject(objectTreeData, object)?.children.push(object);
          }
        });
    }

    if (this.frameObjectsDifference && this.frameObjectsDifference.deletedObjectIds.length && this.comparedFrame) {
      // @ts-ignore
      const addedObjects = this.comparedFrame.objects.filter(object => this.frameObjectsDifference.deletedObjectIds.indexOf(object.id) !== -1);
      addedObjects.map(object => ({...object, children: []}))
        .forEach(object => {
          if (!isNil(object.parent)) {
            findObject(objectTreeData, object)?.children.push(object);
          }
        });
    }

    // eslint-disable-next-line
    return {
      attributes: this.frame ? this.frame.attributes : [],
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
      d.y = 5 + d.y;
      d.x = 5 + (d.depth - treemapNode.depth) * this.nodeWidth / 2 + (levelNodeCounts[d.depth] - 1) * this.nodeWidth;
      maxX = d.x > maxX ? d.x : maxX;
      levelNodeCounts[d.depth] -= 1;
    })
    return [treemapNode, maxX];
  }

  private _clearSvg() {
    d3.select('#treeChart').selectAll('svg').remove();
  }

  private _createSvg(treemapNodes: HierarchyNode<INodeObject>, treeWidth: number): void {
    const svg = d3.select('#treeChart')
      .append('svg')
      .attr('height', (treemapNodes.height + 1) * this.nodeHeight + 'px')
      .attr('width', (treeWidth + this.nodeWidth) + 'px');
    const g = svg.append('g');
    g.selectAll('.link')
      .data(treemapNodes.descendants().slice(1))
      .enter().append('path')
      .attr('class', 'link')
      .style('stroke', d => d.parent ? this._getColor(d.parent.data, this._getAlfa([d.data, d.parent.data]), false) : '#ddd')
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
      .attr('class', d => 'node' + (d.children ? ' node--internal' : ' node--leaf') + (d.data.id != -1 ? ' object' : ' frame'))
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
      this.nodeSelected.emit(this.selectedNode);
    };

    const defs = svg.append('defs');
    const filterRemoved = defs.append('filter')
      .attr('id', 'removedShadow')
    filterRemoved.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 6)
      .attr('result', 'blur');
    filterRemoved.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', 0)
      .attr('dy', 0)
      .attr('result', 'offsetBlur')
    filterRemoved.append('feFlood')
      .attr('in', 'offsetBlur')
      .attr('flood-color', '#e85858')
      .attr('result', 'offsetColor');
    filterRemoved.append('feComposite')
      .attr('in', 'offsetColor')
      .attr('in2', 'offsetBlur')
      .attr('operator', 'in')
      .attr('result', 'offsetBlur');
    const feMergeRemoved = filterRemoved.append('feMerge');
    feMergeRemoved.append('feMergeNode')
      .attr('in', 'offsetBlur')
    feMergeRemoved.append('feMergeNode')
      .attr('in', 'SourceGraphic');
    const filterAdded = defs.append('filter')
      .attr('id', 'addedShadow')
    filterAdded.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 6)
      .attr('result', 'blur');
    filterAdded.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', 0)
      .attr('dy', 0)
      .attr('result', 'offsetBlur')
    filterAdded.append('feFlood')
      .attr('in', 'offsetBlur')
      .attr('flood-color', '#21b029')
      .attr('result', 'offsetColor');
    filterAdded.append('feComposite')
      .attr('in', 'offsetColor')
      .attr('in2', 'offsetBlur')
      .attr('operator', 'in')
      .attr('result', 'offsetBlur');
    const feMergeAdded = filterAdded.append('feMerge');
    feMergeAdded.append('feMergeNode')
      .attr('in', 'offsetBlur')
    feMergeAdded.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    node
      .append('rect')
      .attr('width', this._rectWidth)
      .attr('height', this._rectHeight)
      .attr('rx', 5)
      .attr('ry', 5)
      // .attr('filter', d => this._getShadow(d.data))
      .on('click', toggleColor)
      .attr('id', d => 'circle' + d.data.id)
      .style('stroke', d => this._getLineColor(d.data, this._getAlfa([d.data])))
      .style('stroke-width', '2px')
      .style('fill', d => this._getColor(d.data));

    g.selectAll('.node.frame')
      .append('text')
      .attr('x', 100)
      .attr('y', 35)
      .style('text-anchor', 'middle')
      .text('FRAME');
    g.selectAll('.node.object')
      .data(treemapNodes.descendants().slice(1))
      .append('image')
      .attr('xlink:href', d => this._getIcon(d.data))
      .attr('width', '24')
      .attr('height', '24')
      .attr('x', 160)
      .attr('y', 5)
    const text = g.selectAll('.node.object')
      .data(treemapNodes.descendants().slice(1))
      .append('text')
      .attr('x', 20)
      .attr('y', 20)
      .style('text-anchor', 'start')
    text
      .append('tspan')
      //.style('text-anchor', 'middle')
      .attr('x', 20)
      .attr('dy', 0)
      .style('fill', d => this._getTextColor(d.data))
      .text(d => 'ID: ' + d.data.id);
    text
      .append('tspan')
      //.style('text-anchor', 'middle')
      .attr('x', 20)
      .attr('dy', '1.2em')
      .style('fill', d => this._getTextColor(d.data))
      .text(d => 'Namespace: ' + d.data.namespace);
    text
      .append('tspan')
      //.style('text-anchor', 'middle')
      .attr('x', 20)
      .attr('dy', '1.2em')
      .style('fill', d => this._getTextColor(d.data))
      .text(d => 'Label: ' + d.data.label);
  }

  private _getTextColor(data: INodeObject) {
    if (
      this.objectFilter && this.objectFilter.length &&
      this.objectFilter.some(filter => filter.label === data.label && filter.namespace === data.namespace)
    ) {
      return '#d3d3d3'
    }
    return '#000';
  }

  private _getAlfa(nodes: INodeObject[]) {
    if (
      this.objectFilter && this.objectFilter.length &&
      this.objectFilter.some(filter => nodes.some(node => node.label === filter.label && filter.namespace === node.namespace))
    ) {
      return 0.3;
    }
    return 1;
  }

  private _getColor(data: INodeObject, alfa = 1, applyFilter = true): string {
    const groupIndex = this.objectGroups
      .findIndex(group => group.namespace === data.namespace && data.label === group.label);
    if (
      applyFilter &&
      this.objectFilter && this.objectFilter.length &&
      this.objectFilter.some(filter => filter.label === data.label && filter.namespace === data.namespace)) {
      return '#fff'
    }

    if (groupIndex === -1) {
      return getColor(-1, alfa);
    }

    return getColor((groupIndex + 1) / this.objectGroups.length, alfa);
  }

  private _getLineColor(data: INodeObject, alfa = 1): string {
    if (this.frameObjectsDifference) {
      if (this.frameObjectsDifference.addedObjectIds.indexOf(data.id) !== -1) {
        return '#21b029'
      }
      if (this.frameObjectsDifference.deletedObjectIds.indexOf(data.id) !== -1) {
        return '#e85858'
      }
    }
    return this._getColor(data, alfa, false);
  }

  private _getShadow(data: INodeObject): string {
    if (this.frameObjectsDifference) {
      if (this.frameObjectsDifference.addedObjectIds.indexOf(data.id) !== -1) {
        return 'url(#addedShadow)'
      }
      if (this.frameObjectsDifference.deletedObjectIds.indexOf(data.id) !== -1) {
        return 'url(#removedShadow)'
      }
    }
    return '';
  }

  private _getIcon(data: INodeObject): string {
    if (this.frameObjectsDifference) {
      if (this.frameObjectsDifference.addedObjectIds.indexOf(data.id) !== -1) {
        return '/assets/icons/add_circle_outline.svg';
      }
      if (this.frameObjectsDifference.deletedObjectIds.indexOf(data.id) !== -1) {
        return '/assets/icons/cancel.svg';
      }
      if (!isNil(this.frameObjectsDifference.objectUpdates[data.id])) {
        return '/assets/icons/swap_horizontal_circle.svg';
      }
    }
    return '';
  }
}
