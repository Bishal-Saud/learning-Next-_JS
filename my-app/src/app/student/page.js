import Link from "next/link";

async function getUser() {
  let data = await fetch("http://localhost:3000/api/user");
  data = await data.json();
  return data;
}

export default async function Page() {
  const user = await getUser();
  // console.log(user);
  return (
    <div>
      <h2>Student List</h2>
      {user.map((item) => (
        <div>
          <h2>
            {" "}
            Name: <Link href={`student/${item.id}`}>{item.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
