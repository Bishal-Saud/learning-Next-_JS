"use client";

export default function DeleteUser(props) {
  const id = props.id;

  const deleteUserData = async () => {
    let res = await fetch("http://localhost:3000/api/user/" + id, {
      method: "DELETE",
    });
    res = await res.json();
    console.log(res);
    if (res.success) {
      alert("User deleted");
    } else {
      alert("Something Wrong, Try Again");
    }
  };
  return (
    <>
      <button onClick={deleteUserData}>Delete</button>
    </>
  );
}
