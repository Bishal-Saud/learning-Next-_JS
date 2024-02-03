async function userData(id) {
  let res = await fetch(`http://localhost:3000/api/user/${id}`);
  res = await res.json();
  return res.data;
}
export default async function Page({ params }) {
  let data = await userData(params.id);
  // console.log("data", data);
  return (
    <div>
      <h1>User all details</h1>
      <h2>Name:{data.name}</h2>
      <h2>Age:{data.age}</h2>
      <h2>Email:{data.email}</h2>
    </div>
  );
}
