export default function toObject (obj) {
  return obj.reduce((result, { key, value }) => {
    if (key !== "") result[key] = value
    return result;
  }, {});
};