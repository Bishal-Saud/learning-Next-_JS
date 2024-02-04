"use client";
import "@/app/users/form.css";
import { useState } from "react";

//remaining to solve
export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  async function addUser() {
    let response = await fetch("http://localhost:3000/api/user", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    // console.log(response);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form submitted");
  };
  return (
    <div className="div_center">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          value={name}
          type="text"
          id="username"
          name="username"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          value={email}
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="age">Age:</label>
        <input
          value={age}
          type="age"
          id="age"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={addUser} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
