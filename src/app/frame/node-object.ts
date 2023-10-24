import { IFrameJson, IFrameJsonObject } from 'sf';

export interface INodeObject extends IFrameJsonObject {
  children: INodeObject | any;
  isFrame?: boolean;
  frameValue?: IFrameJson;
}
