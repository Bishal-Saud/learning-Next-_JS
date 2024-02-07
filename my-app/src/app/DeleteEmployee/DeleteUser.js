"use client";

import { useRouter } from "next/navigation";

export default function DeleteEmployee(props) {
  const router = useRouter();
  const id = props.id;
  const deleteEmployee = async () => {
    let data = await fetch("http://localhost:3000/api/products/" + id, {
      method: "DELETE",
    });
    data = await data.json();
    if (data.success) {
      alert(data.message);
      router.push("/employee");
    }
  };

  return (
    <div>
      {" "}
      <button key={id} onClick={deleteEmployee}>
        Delete Employee
      </button>{" "}
    </div>
  );
}
