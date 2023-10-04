import { isNil } from 'lodash';

export interface IAttributes {
  name: string;
  namespace: string;
  is_persistent: boolean;
  values: { value: any; confidence: number | null }[];
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

export interface ISpan {
  traceID: string;
  spanID: string;
  operationName: string
  tags: ISpanTag[];
  logs: string[];
  processID: string;
  startTime: number;
  [key: string]: any;
}

export interface IData {
  traceID: string;
  spans: ISpan[];
  processes: any,
  [key: string]: any;
}

export const getValue = (v): string => {
  if (isNil(v)) {
    return '—';
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
  return Object.keys(v).map(key => `${key}: ${getValue(v[key])}`).join('; ');
};

