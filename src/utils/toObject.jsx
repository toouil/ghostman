export default function toObject (obj) {
  return obj.reduce((result, { key, value }) => {
    if (key !== "") result[key] = value
    return result;
  }, {});
};

export function reverseToKeyValue (obj) {
  return Object.entries(obj).map(([ key, value ]) => {
    return { key, value }
  })
};