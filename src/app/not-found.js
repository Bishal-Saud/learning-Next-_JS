import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This page is not available !</h1>
      <Link href="/login">Go back to login</Link>
    </div>
  );
}
