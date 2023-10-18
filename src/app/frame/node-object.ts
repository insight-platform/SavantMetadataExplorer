import { IFrameJson, IFrameJsonObject } from '../api/models/span';

export interface INodeObject extends IFrameJsonObject {
  children: INodeObject | any;
  isFrame?: boolean;
  frameValue?: IFrameJson;
}
