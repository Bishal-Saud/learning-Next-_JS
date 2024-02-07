"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [file, setFile] = useState();
  const formSubmitted = async (e) => {
    e.preventDefault();
    // console.log(file);
    const data = new FormData();
    //name should be same as backend name like file,here should be file
    data.set("file", file);
    let result = await fetch("api/imageupload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    if (result.success) {
      alert(result.message);
    }
    console.log(result);
  };
  return (
    <main className={styles.main}>
      <h2>Image Uploader</h2>
      <form onSubmit={formSubmitted}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </main>
  );
}
