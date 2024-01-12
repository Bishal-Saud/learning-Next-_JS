"use client";
import Link from "next/link";
import style from "./page.module.css";
import clear from "./style/other.module.css";
import { useState } from "react";
export default function NotFound() {
  const [color, setColor] = useState("red");
  return (
    <div className={color === "red" ? style.red : style.blue}>
      <h1>This page is not available !</h1>
      <Link className={clear.beauty} href="/login">
        Go back to login
      </Link>

      <button onClick={() => setColor("blue")}>change color</button>
    </div>
  );
}
