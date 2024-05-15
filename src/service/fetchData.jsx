async function fetchData(id, path) {
  const response = await fetch(`http://localhost:3000/user/${id}/${path ? path : ''}`);
  const data = await response.json();
  return data;
}

export default fetchData;
