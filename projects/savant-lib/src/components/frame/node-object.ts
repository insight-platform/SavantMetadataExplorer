import { IFrameJson, IFrameJsonObject } from '../../models/model';

export interface INodeObject extends IFrameJsonObject {
  children: INodeObject | any;
  isFrame?: boolean;
  frameValue?: IFrameJson;
}
