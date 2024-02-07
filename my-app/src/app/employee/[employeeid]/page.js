"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const id = props.params.employeeid;

  useEffect(() => {
    userDetails();
  }, []);
  const userDetails = async () => {
    let result = await fetch("http://localhost:3000/api/products/" + id);
    result = await result.json();

    if (result.success) {
      let data = result.user;
      setName(data.name);
      setAge(data.age);
      setEmail(data.email);
    }
  };

  const upadateUser = async () => {
    let data = await fetch("http://localhost:3000/api/products/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });

    data = await data.json();
    if (data.success) {
      alert("User Updated");
    }
    // console.log(data);
  };
  return (
    <div className="form">
      <h1>Update Employee</h1>
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

      <button className="btn" onClick={upadateUser}>
        Update Employee
      </button>

      <Link href={"/employee"}>Back to Employee List </Link>
      <Link href={"/"}>Back to Home </Link>
    </div>
  );
}
