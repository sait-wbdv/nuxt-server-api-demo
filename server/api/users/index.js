export default defineEventHandler(async (event) => {
  const data = await fetchData("https://dummyjson.com/users");
  return data;
});
