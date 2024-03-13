export default async function (url, key, value) {
  try {
    const { data } = await fetchData(url);
    return findObjectByKey(data, key, value);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
