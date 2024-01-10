import Link from "next/link";

export default function StudentList() {
  const names = ["bishal", "ravi", "suman", "umesh"];

  return (
    <div>
      <h1>Student List Page</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={`/studentlist/${name}`}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
