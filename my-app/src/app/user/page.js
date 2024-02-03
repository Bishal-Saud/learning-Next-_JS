import Link from "next/link";
import DeleteUser from "../untils/DeleteUser";

async function userData() {
  let res = await fetch("http://localhost:3000/api/user");
  res = await res.json();
  return res.Users;
}

export default async function Page() {
  let users = await userData();
  //   console.log("Users");
  return (
    <div>
      <h2>All Users </h2>
      {users.map((item) => (
        <div key={item.id}>
          <h3>
            Name: <Link href={`/user/${item.id}`}>{item.name}</Link>{" "}
          </h3>
          <h2>
            {""}
            <Link href={`/user/${item.id}/update`}>Edit</Link>{" "}
          </h2>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}
