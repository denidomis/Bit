export async function getAllCountries(cb = (a) => a) {
  const promise = await fetch("/server/api/country");
  const response = await promise.json();
  cb(response);
  console.log(response);
  return response;
}
