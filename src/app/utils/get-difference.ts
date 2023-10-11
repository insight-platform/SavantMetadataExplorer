import { IFrameJson, IFrameJsonObject } from '../api/models/span';
import { cloneDeep, isEqual, isNil, uniq } from 'lodash';
import { diff, Operation } from 'json-diff-ts'
import { IChange } from 'json-diff-ts/lib/jsonDiff';

export type FrameDifference = {
  deletedKeys: string[]
  addedKeys: string[];
  updatedKeys: string[];
  updatedValues: { [key: string]: any };
}

export type FrameObjectsDifference = {
  deletedObjectIds: number[];
  addedObjectIds: number[];
  objectUpdates: { [key: number]: { [key: string]: any }};
}

export const getFrameDifference = (firstFrame: IFrameJson, secondFrame: IFrameJson): FrameDifference => {
  const firstKeys = Object.keys(firstFrame).filter(key => key !== 'objects' && key !== 'attributes');
  const secondKeys = Object.keys(secondFrame).filter(key => key !== 'objects' && key !== 'attributes');

  const deletedKeys = firstKeys
    .filter(firstKey => secondKeys.indexOf(firstKey) === -1);
  const addedKeys = secondKeys.filter(secondKey => firstKeys.indexOf(secondKey) === -1);

  const updatedKeys = firstKeys
    .filter(firstKey => !isNil(secondFrame[firstKey]) && !isEqual(firstFrame[firstKey], secondFrame[firstKey]));
  const updatedValues = updatedKeys.reduce((res, key) => ({ ...res, [key]: secondFrame[key] }), {});

  return {
    deletedKeys,
    addedKeys,
    updatedKeys,
    updatedValues,
  };
};
export const getFrameDiff = (firstFrame: IFrameJson, secondFrame: IFrameJson, omitKeys?: string[]) => {
  const first = cloneDeep(firstFrame);
  const second = cloneDeep(secondFrame);
  if (omitKeys && omitKeys.length) {
    omitKeys.forEach(key => {
      delete first[key];
      delete second[key];
    })
  }
  const res: IChange[] = diff(first, second);
  const keys = uniq(res.map(change => change.key));
  keys.forEach(key => {
    const keyChanges = res.filter(change => change.key === key);
    if (keyChanges.length === 2 && keyChanges[0].type === Operation.REMOVE && keyChanges[1].type === Operation.ADD) {
      const newKeyChange = { ...keyChanges[1], type: Operation.UPDATE, oldValue: keyChanges[0].value };
      [Operation.REMOVE, Operation.ADD].forEach(operation => {
        const index = res.findIndex(change => change.key === key && change.type === operation);
        res.splice(index, 1);
      });
      res.push(newKeyChange);
    }
  });
  const updates = res.filter(change => change.type === Operation.UPDATE)
    .map(change => {
      if (isNil(change.value)) {
        change.value = second[change.key];
        change.oldValue = first[change.key];
      }
      return change;
    });
  const adds = res.filter(change => change.type === Operation.ADD);
  const removes = res.filter(change => change.type === Operation.REMOVE);

  return { adds, updates, removes};
}

export const getFrameObjectsDifference = (firstFrameObjects: IFrameJsonObject[], secondFrameObjects: IFrameJsonObject[]): FrameObjectsDifference => {
  const deletedObjectIds = firstFrameObjects
    .filter(firstObject => !secondFrameObjects.find(secondObject => firstObject.id === secondObject.id))
    .map(object => object.id);
  const addedObjectIds = secondFrameObjects
    .filter(secondObject => !firstFrameObjects.find(firstObject => firstObject.id === secondObject.id))
    .map(object => object.id);
  const objectUpdates = {};
  firstFrameObjects
    .forEach(firstObject => {
      const secondObject = secondFrameObjects.find(_ => _.id === firstObject.id);
      if (!isNil(secondObject)) {
        let differences = { };
        Object.keys(secondObject).forEach(key => {
          if (!isEqual(firstObject[key], secondObject[key])) {
            differences[key] = secondObject[key];
          }
        });
        if (Object.keys(differences).length) {
          objectUpdates[firstObject.id] = differences;
        }
      }
    });

  return {
    deletedObjectIds,
    addedObjectIds,
    objectUpdates,
  };
}
