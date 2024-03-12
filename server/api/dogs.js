export default defineEventHandler((event) => {
  async function getDogData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const { message } = await res.json();
    const filteredData = Object.keys(message);
    return filteredData;
  }
  return getDogData();
});
