import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Home page</h2>
      <Link href="/adduser">Add Users</Link>
      <br />
      <Link href="/employee">Employee </Link>
    </main>
  );
}
