export default async function (data, keys) {
  const extractedData = [];
  keys.forEach((key) => {
    if (key in data) {
      extractedData.push(data[key]);
    }
    console.log("done extracting data");
  });
  return extractedData;
}
