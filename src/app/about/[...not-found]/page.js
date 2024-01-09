import Link from "next/link";

export default function AboutNotFound() {
  return (
    <div>
      <h1>This About page is not available !</h1>
      <Link href="/login">Go back to login</Link>
    </div>
  );
}

// Note : It's possible to create 404 page for each but it's not a good practice so make global 404 page.
