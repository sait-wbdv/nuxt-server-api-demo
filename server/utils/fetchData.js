export default async function (url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`${res.status}: Could not fetch data`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Fetch Error: ${error}`);
    throw error;
  }
}
