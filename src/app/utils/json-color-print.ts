export const replacer = (match, pIndent, pKey, pVal) => {
  const key = '<span class=json-key>';
  const value = '<span class=json-value>';
  const addKey = '<span class=green>';
  const removeKey = '<span class=red>';

  let r = pIndent || '';
  if (pKey) {
    const k = pKey.replace(/[":]/g, '');
    const prefix = k.indexOf('+') === 0 ? addKey :
      k.indexOf('-') === 0 ? removeKey : key;
    r = r + prefix + k + '</span>: ';
  }
  if (pVal) {
    const v = pVal.replace(/[":]/g, '');
    const prefix = v.indexOf('+') === 0 ? addKey :
      v.indexOf('-') === 0 ? removeKey : value;
    r = r + prefix + v + '</span>';
  }
  return r; // + (pEnd || '');
};
export const jsonColorPrint = (obj) => {
  const jsonLine = /^( *)("[\w\s+-]+": )?("[^"]*"|[\w.+-]*)?/mg;
  return JSON.stringify(obj, null, 3)
    .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(jsonLine, replacer);
}