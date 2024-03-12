export default defineEventHandler((event) => {
  async function getData() {
    const res = await fetch(
      "https://api.disneyapi.dev/character?name=Mickey%20Mouse"
    );
    const { data } = await res.json();
    return data;
  }
  return getData();
});
