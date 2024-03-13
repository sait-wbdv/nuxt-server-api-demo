export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const data = await fetchData(`https://dummyjson.com/users/${id}`);
  return data;
});
