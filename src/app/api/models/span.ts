export interface IAttributes {
  name: string;
  namespace: string;
  is_persistent: boolean;
  values: { value: any; confidence: number | null }[];
  [key: string]: any;
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
