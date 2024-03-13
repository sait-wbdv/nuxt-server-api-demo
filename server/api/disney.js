export default defineEventHandler(async (event) => {
  const data = await fetchDataByKey(
    "https://api.disneyapi.dev/character?name=Mickey%20Mouse",
    "name",
    "Mickey Mouse"
  );
  const extractedData = extractValues(data, ["films"]);
  return extractedData;
});
