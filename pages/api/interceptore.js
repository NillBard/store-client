async function fetchTokenFx(url, token, method, ...arg) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...arg }),
  });
  const { status, data } = await response.json();
  if (status == 401) {
    fetchTokenFx(url, token, method, ...arg);
  }
}
