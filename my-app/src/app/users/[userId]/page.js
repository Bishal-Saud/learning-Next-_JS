import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const getUserList = getUsers();
  const users = await getUserList;
  const currentId = props.params.userId;
  const currentUser = users[currentId - 1];

  return (
    <div>
      <h1>User Details</h1>
      <h2>Name: {currentUser.name}</h2>
      <h2>Phone: {currentUser.phone}</h2>
      <h2>Website: {currentUser.website}</h2>
    </div>
  );
}

export async function generateStaticParams() {
  const getUserList = getUsers();
  const users = await getUserList;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
