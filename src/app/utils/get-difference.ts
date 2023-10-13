import { getValue, IAttributes, IFrameJson, IFrameJsonObject } from '../api/models/span';
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
/* deprecated */
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
export const getFrameDiff = (firstFrame: IFrameJson, secondFrame: IFrameJson, omitKeys?: string[]) => {
  const res: IChange[] = getFrameDiffOriginal(firstFrame, secondFrame, omitKeys);
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
        change.value = secondFrame[change.key];
        change.oldValue = firstFrame[change.key];
      }
      return change;
    });
  const adds = res.filter(change => change.type === Operation.ADD);
  const removes = res.filter(change => change.type === Operation.REMOVE);

  return { adds, updates, removes};
}

export const stringify = (change: IChange, withKey = true) => {
  if (change.type === Operation.ADD) {
    return withKey && change.key !== '$root'? { key: '+ ' + change.key, value: getValue(change.value) } : '+ ' + getValue(change.value);
  }
  if (change.type === Operation.REMOVE) {
    return withKey && change.key !== '$root' ? { key: '- ' + change.key, value: getValue(change.value) } : '- ' + getValue(change.value);
  }
  if (change.type === Operation.UPDATE) {
    if (change.changes) {
      if (change.embeddedKey) {
        return {
          key: change.key,
          value: [
            ...change.changes.map(c => stringify(c, false))
          ],
        };
      }
      return {
        key: change.key,
        value: change.changes.map(c => stringify(c))
            .reduce((res, c) => ({ ...res, [c['key']]: c['value'] }), {}),
      }
    }
    return withKey ? { key: change.key, value: getValue(change.oldValue) + ' -> ' + getValue(change.value) } :
      getValue(change.oldValue) + ' -> ' + getValue(change.value);
  }
  return { key: '', value: '' };
}

export const getFrameDiffAsString = (firstFrame: IFrameJson, secondFrame: IFrameJson, omitKeys?: string[]) => {
  const res: IChange[] = getFrameDiffOriginal(firstFrame, secondFrame, omitKeys);
  const resAsString = res.map(change => stringify(change));
  return resAsString.reduce((res, c) => ({ ...res, [c['key']]: c['value'] }), {});
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

export const getValueDiff = (firstValue: any, secondValue: any) => {
  return diff(firstValue, secondValue);
}

export const getValueDiffAsString = (firstValue: any, secondValue: any) => {
  const res: IChange[] = diff(firstValue, secondValue);
  if (res.length === 2 && res.find(change => change.key === '$root')) {
    return getValue(res.find(c => c.type === Operation.REMOVE)?.value) + ' -> ' + getValue(res.find(c => c.type === Operation.ADD)?.value);
  }
  if (res.length === 1 && res.find(change => change.key === '$root')) {
    if (res[0].changes) {
      if (res[0].embeddedKey) {
        return [
          ...res[0].changes.map(c => stringify(c, false))
        ];
      }
      return res[0].changes.map(c => stringify(c, false))
          .reduce((res, c) => ({ ...res, [c['key']]: c['value'] }), {});
    }
    return stringify(res[0], false);
  }
  return res.map(change => stringify(change)).reduce((res, c) => ({ ...res, [c['key']]: c['value'] }), {});
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