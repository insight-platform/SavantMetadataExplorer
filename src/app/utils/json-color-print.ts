export const replacer = (match, indent, keySubStr, valueSubStr) => {
  const plainKey = '<span class=json-key>';
  const plainValue = '<span class=json-value>';
  const addKey = '<span class=green>';
  const removeKey = '<span class=red>';

  let result = indent || '';
  if (keySubStr) {
    const key = keySubStr.replace(/[":]/g, '');
    const prefix = key.indexOf('+') === 0 ? addKey :
      key.indexOf('-') === 0 ? removeKey : plainKey;
    result = result + prefix + key + '</span>: ';
  }
  if (valueSubStr) {
    const value = valueSubStr.replace(/["]/g, '');
    const prefix = value.indexOf('+') === 0 ? addKey :
      value.indexOf('-') === 0 ? removeKey : plainValue;
    result = result + prefix + value + '</span>';
  }
  return result;
};
export const jsonColorPrint = (obj) => {
  const jsonLine = /^( *)("[\w\s+-]+": )?("[^"]*"|[\w.+-]*)?/mg;
  return JSON.stringify(obj, null, 3)
    .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(jsonLine, replacer);
}