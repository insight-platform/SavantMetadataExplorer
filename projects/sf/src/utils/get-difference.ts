import { getValue, IAttributes, IAttributeValue, IFrameJson, IFrameJsonObject } from '../models/model';
import { cloneDeep, isEqual, isNil, uniq } from 'lodash';
import { diff, Operation } from 'json-diff-ts'
import { IChange } from 'json-diff-ts/lib/jsonDiff';

export type FrameObjectsDifference = {
  deletedObjectIds: number[];
  addedObjectIds: number[];
  objectUpdates: { [key: number]: { [key: string]: any }};
}
export const getDataDiff = (firstData: any, secondData: any, omitKeys?: string[]) => {
  const first = cloneDeep(firstData);
  const second = cloneDeep(secondData);
  if (omitKeys && omitKeys.length) {
    omitKeys.forEach(key => {
      delete first[key];
      delete second[key];
    })
  }
  const res: IChange[] =  diff(first, second);
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
        change.value = secondData[change.key];
        change.oldValue = firstData[change.key];
      }
      return change;
    });
  const adds = res.filter(change => change.type === Operation.ADD);
  const removes = res.filter(change => change.type === Operation.REMOVE);

  return { adds, updates, removes};
}

export const getFrameDiffOriginal = (firstFrame: IFrameJson, secondFrame: IFrameJson, omitKeys?: string[]) => {
  const first = cloneDeep(firstFrame);
  const second = cloneDeep(secondFrame);
  if (omitKeys && omitKeys.length) {
    omitKeys.forEach(key => {
      delete first[key];
      delete second[key];
    })
  }
  return diff(first, second);
}

export const stringify = (change: IChange, withKey = true) => {
  if (change.type === Operation.ADD) {
    return withKey && change.key !== '$root'? {['+ ' + change.key]: getValue(change.value)} : '+ ' + getValue(change.value);
  }
  if (change.type === Operation.REMOVE) {
    return withKey && change.key !== '$root' ? {['- ' + change.key]: getValue(change.value)} : '- ' + getValue(change.value);
  }
  if (change.type === Operation.UPDATE) {
    if (change.changes) {
      if (change.embeddedKey) {
        return {
          [change.key]:[
            ...change.changes.map(c => stringify(c, false))
          ],
        };
      }
      return {
        ...change.changes.map(c => stringify(c))
            .reduce((res, c) =>
              ({ ...res, ...c }), {}),
      }
    }
    return withKey ? { ['- ' + change.key]: getValue(change.oldValue),  ['+ ' + change.key]: getValue(change.value) } :
      [ '- ' + getValue(change.oldValue), '+ ' + getValue(change.value)];
  }
  return { ['null']: '' };
}

export const stringifyWithOther = (change: IChange, value: any, withKey = true) => {
  if (change.type === Operation.ADD) {
    return withKey && change.key !== '$root'? {['+ ' + change.key]: getValue(change.value)} : '+ ' + getValue(change.value);
  }
  if (change.type === Operation.REMOVE) {
    return withKey && change.key !== '$root' ? {['- ' + change.key]: getValue(change.value)} : '- ' + getValue(change.value);
  }
  if (change.type === Operation.UPDATE) {
    if (change.changes) {
      if (change.embeddedKey) {
        const indexes = change.changes?.map(c => Number(c.key));
        return {
          [change.key]:[
            ...change.changes.map(c => stringifyWithOther(c, value[change.key], false)),
            ...value[change.key].filter((item, index) => indexes.indexOf(index) === -1),
          ],
        };
      }
      const otherKeys = Object.keys(value[change.key]).filter(key => change.changes?.map(c => c.key).indexOf(key) === -1);
      if (isNaN(Number(change.key))) {
        return {
          [change.key]: {
            ...change.changes.map(c => stringifyWithOther(c, value[change.key]))
              .reduce((res, c) =>
                ({...res, ...c}), {}),
            ...otherKeys.reduce((res, k) => ({
              ...res,
              [k]: value[change.key][k],
            }), {}),
          },
        }
      }
      return {
          ...change.changes.map(c => stringifyWithOther(c, value[change.key]))
            .reduce((res, c) =>
              ({...res, ...c}), {}),
          ...otherKeys.reduce((res, k) => ({
            ...res,
            [k]: value[change.key][k],
          }), {}),
        };
    }
    return withKey ? { ['- ' + change.key]: getValue(change.oldValue),  ['+ ' + change.key]: getValue(change.value) } :
      [ '- ' + getValue(change.oldValue), '+ ' + getValue(change.value)];
  }
  return { ['null']: '' };
}

export const getFullFrameDiffAsString = (firstFrame: IFrameJson, secondFrame: IFrameJson, omitKeys?: string[]) => {
  const res: IChange[] = getFrameDiffOriginal(firstFrame, secondFrame, omitKeys);
  const resAsString = res.map(change => stringifyWithOther(change, firstFrame));
  const keys = Object.keys(firstFrame).filter(key => !omitKeys || !omitKeys.includes(key))
    .filter(key => res.map(c => c.key).indexOf(key) === -1);
  return resAsString.reduce((res, c) => ({ ...res, ...c }), {
    ...keys.reduce((res, k) => ({
      ...res,
      [k]: firstFrame[k],
    }), {}),
  });
}

export const getFrameObjectDiffOriginal = (firstFrameObject: IFrameJsonObject, secondFrameObject: IFrameJsonObject, omitKeys?: string[]) => {
  const first = cloneDeep(firstFrameObject);
  const second = cloneDeep(secondFrameObject);
  if (omitKeys && omitKeys.length) {
    omitKeys.forEach(key => {
      delete first[key];
      delete second[key];
    })
  }
  return diff(first, second);
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
        const differences = { };
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

export const getFullFrameObjectDiffAsString = (firstFrameObject: IFrameJsonObject, secondFrameObject: IFrameJsonObject, omitKeys?: string[]) => {
  const res: IChange[] = getFrameObjectDiffOriginal(firstFrameObject, secondFrameObject, omitKeys);
  const keys = Object.keys(firstFrameObject).filter(key => !omitKeys || !omitKeys.includes(key))
    .filter(key => res.map(c => c.key).indexOf(key) === -1);
  const resAsString = res.map(change => stringifyWithOther(change, firstFrameObject));
  return resAsString.reduce((res, c) => ({ ...res, ...c }),
    {
      ...keys.reduce((res, k) => ({
        ...res,
        [k]: firstFrameObject[k],
      }), {}),
    });
}

export const getValueDiff = (firstValue: any, secondValue: any) => {
  return diff(firstValue, secondValue);
}

export const getValueDiffAsString = (firstValue: any, secondValue: any) => {
  const res: IChange[] = diff(firstValue, secondValue);
  if (res.length === 2 && res.find(change => change.key === '$root')) {
    return [
      '- ' + getValue(res.find(c => c.type === Operation.REMOVE)?.value),
      '+ ' +  getValue(res.find(c => c.type === Operation.ADD)?.value),
    ];
  }
  if (res.length === 1 && res.find(change => change.key === '$root')) {
    if (res[0].changes) {
      if (res[0].embeddedKey) {
        return [
          ...res[0].changes.map(c => stringify(c, false))
        ];
      }
      return res[0].changes.map(c => stringify(c, false))
          .reduce((res, c) => ({ ...res, ...c }), {});
    }
    return stringify(res[0], false);
  }
  return res.map(change => stringify(change)).reduce((res, c) => ({ ...res, ...c }), {});
}

export const getAttributesDifference = (firstAttributes: IAttributes[], secondAttributes: IAttributes[]) => {
  const firstAttributeNamespaces = uniq(firstAttributes.map(attribute => attribute.namespace));
  const secondAttributeNamespaces = uniq(secondAttributes.map(attribute => attribute.namespace));

  const removedNamespaces = firstAttributeNamespaces.filter(namespace => secondAttributeNamespaces.indexOf(namespace) === -1);
  const updatedNamespaces = firstAttributeNamespaces.filter(namespace => secondAttributeNamespaces.indexOf(namespace) !== -1)
    .filter(namespace => getValueDiff(
      firstAttributes.filter(a => a.namespace === namespace),
      secondAttributes.filter(a => a.namespace === namespace)
    ).length);
  const addedNamespaces = secondAttributeNamespaces.filter(namespace => firstAttributeNamespaces.indexOf(namespace) === -1);

  return { removedNamespaces, updatedNamespaces, addedNamespaces };
}

export const getAttributesDiff = (firstAttribute: IAttributes, secondAttribute: IAttributes) => {
  const res: IChange[] = diff(firstAttribute, secondAttribute);
  const keys = Object.keys(firstAttribute)
    .filter(key => res.map(c => c.key).indexOf(key) === -1);
  const resAsString = res.map(change => stringifyWithOther(change, firstAttribute));
  return resAsString.reduce((res, c) => ({ ...res, ...c }),
    {
      ...keys.reduce((res, k) => ({
        ...res,
        [k]: firstAttribute[k],
      }), {}),
    });
}
export const getAttributeValuesDiff = (firstAttributeValues: IAttributeValue[], secondAttributeValues: IAttributeValue[]) => {
  return firstAttributeValues
    .map((value, index) => {
      const changes = diff(value, secondAttributeValues[index]);
      if (changes.length) {
        const keys = Object.keys(value)
          .filter(key => changes.map(c => c.key).indexOf(key) === -1);
        return changes.map(change => stringifyWithOther(change, value))
          .reduce((res, c) => ({...res, ...c}), {
            ...keys.reduce((res, k) => ({
              ...res,
              [k]: value[k],
            }), {}),
          });
      }
      return value;
    });
}