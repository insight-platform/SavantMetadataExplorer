import { isNil } from 'lodash';
import { AnsiUp } from 'ansi_up'
import { SafeHtml } from '@angular/platform-browser';

export interface IAttributeValue {
  value: any;
  confidence: number | null;
}
export interface IAttributes {
  name: string;
  namespace: string;
  is_persistent: boolean;
  values: IAttributeValue[];
  [key: string]: any;
}

export interface ITransformation {
  initial_size: number[];
  scale: number[];
  padding: number[];
  resulting_size: number[];
}
export interface IContent {
  external: {
    location: string;
    method: string;
  };
  internal: string | null;
}

export interface IFrameJsonObject {
  attributes: IAttributes[],
  frame: string,
  id: number;
  label: string;
  namespace: string;
  parent: number | null;
  [key: string]: any;
}

export interface IFrameJson {
  attributes: IAttributes[];
  framerate: string;
  objects: IFrameJsonObject[]
  source_id: string;
  type: string;
  version: string;
  transformations: Partial<ITransformation>[];
  content: Partial<IContent> | null;
  time_base: number[];
  [key: string]: any;
}

export interface ISpanTag {
  key: string;
  type: string;
  value: IFrameJson | string;
}

export interface ISpanLogField {
  key: string;
  type: string;
  value: string;
}

export interface ISpanLog {
  timestamp: number;
  fields: ISpanLogField[];
}

export enum ReferenceType {
  ChildOf = 'CHILD_OF',
  FollowsFrom = 'FOLLOWS_FROM',
}

export interface IReference {
  traceID: string;
  spanID: string;
  refType: ReferenceType;
}

export interface ISpan {
  traceID: string;
  spanID: string;
  operationName: string
  tags: ISpanTag[];
  logs: ISpanLog[];
  processID: string;
  startTime: number;
  references: IReference[];
  [key: string]: any;
}

export interface ITreeSpan extends ISpan {
  children: ITreeSpan[];
}

export interface ITrace {
  traceID: string;
  spans: ISpan[];
  processes: any,
  [key: string]: any;
}

export interface IData {
  data: ITrace[];
  errors: any;
  limit: number;
  offset: number;
  total: number;
}

export interface ILog {
  timestamp: string;
  startTimestampDelta?: string;
  lines: string[];
}
export interface ISafeLog {
  timestamp: string;
  startTimestampDelta: string;
  previousTimestampDelta: string;
  lines: SafeHtml[];
}
export interface ILogFilter {
  level: string[];
  target: string[];
  search: string;
  spans: string[];
}

export const getValue = (v): string => {
  if (isNil(v)) {
    return '—';
  }
  if (typeof v === 'boolean') {
    return v.toString();
  }
  if (typeof v === 'string') {
    return v;
  }
  if (typeof v === 'number') {
    return v.toString();
  }
  if (Array.isArray(v)) {
    return '[' + v.map(vItem => {
      return getValue(vItem)
    }).join(', ') + ']';
  }
  const res = Object.keys(v).map(key => `${key}: ${getValue(v[key])}`).join('; ')
  return Object.keys(v).length > 1 ? '{ ' + res + ' }' : res;
};

export const getArrayValue = (v): string[] => {
  if (isNil(v) || ['string', 'number', 'boolean'].indexOf(typeof v) !== -1) {
    return [getValue(v)]
  }
  if (Array.isArray(v)) {
    if (v.length === 0) {
      return ['—'];
    }
    if (!isNil(v[0]) && ['string', 'number', 'boolean'].includes(typeof v[0])) {
      return [getValue(v)];
    }
    return v.map(vItem => getValue(vItem));
  }
  return Object.keys(v).map(key => `${key}: ${getValue(v[key])}`);
}

export const logFunctionKeys = ['log.level', 'log.target'];
export const logEventKeys = ['event.name', 'event.domain'];

export const ansiUp = new AnsiUp();
export const getLogValue = (v: ISpanLogField[]): string[] => {
  const [level, target] = logFunctionKeys.map(key => v.find(field => field.key === key )?.value);
  // const [eventName, eventDomain] = logEventKeys.map(key => v.find(field => field.key === key )?.value);
  const event = ansiUp.ansi_to_html(v.find(field => field.key === 'event' )?.value || '');

  const attributes = v.filter(field => [...logFunctionKeys, ...logEventKeys].indexOf(field.key) === -1)
    .map(field => `${field.key} = ${field.value.toString()}`);

  return [
    (level ? ('[' + level +'] ') : '') + (target ? ('[' + target +'] ') : '') + event,
    '',
    ...(attributes.length ? attributes.map(attr => `| ${attr}`) : []),
  ];
}