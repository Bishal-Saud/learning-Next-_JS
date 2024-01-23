export default async function getUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = users.json();

  return data;
}
