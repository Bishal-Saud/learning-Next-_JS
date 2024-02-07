"use client";
import "@/app/globals.css";
import { useState } from "react";
export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const userDetails = async () => {
    // console.log(name, age, email);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result.success) {
      alert("User Added");
    }
  };

  return (
    <div className="form">
      <h1>Add Employee</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name="age"
        value={age}
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn" onClick={userDetails}>
        Add
      </button>
    </div>
  );
}
