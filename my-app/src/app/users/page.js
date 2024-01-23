import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function Page() {
  const getUserList = getUsers();
  const users = await getUserList;
  //   console.log(users);
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <h2>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
}
