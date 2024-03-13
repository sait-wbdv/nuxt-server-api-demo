export default function (arr, key, value) {
  return arr.find((obj) => obj[key] === value);
}
