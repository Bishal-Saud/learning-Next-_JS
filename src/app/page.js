"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const [name, setName] = useState("Bishal");
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  const changeName = () => {
    setName((preNam) => (preNam === "Bishal" ? "Umesh" : "Bishal"));
  };

  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      {/* linking  */}
      <Link href="/login">Login</Link>
      <Link href="/about">About</Link>

      {/* navigation  */}
      <button onClick={() => navigate("login")}>Login page</button>
      <button onClick={() => navigate("about")}>About page</button>
      <p>My name is {name}</p>
      <button onClick={changeName}>Click Me</button>
    </main>
  );
}
