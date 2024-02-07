import Link from "next/link";
import DeleteEmployee from "../DeleteEmployee/DeleteUser";

const employeeData = async () => {
  let res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  res = await res.json();
  return res.data;
};

export default async function Page() {
  const employees = await employeeData();

  return (
    <div>
      <h2>Our Employee Details</h2>
      <table border="1">
        <thead>
          {employees.map((employee) => (
            <tr>
              <td> Name: {employee.name}</td>
              <td> Age: {employee.age}</td>
              <td> email: {employee.email}</td>
              <td>
                {" "}
                <Link href={`/employee/${employee._id}`}>Edit</Link>
                <DeleteEmployee id={employee._id} />
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
}
