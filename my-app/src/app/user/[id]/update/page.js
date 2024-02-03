"use client";
import "@/app/users/form.css";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const id = params.id;
  // console.log(params);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    userDetails();
  }, []);

  const userDetails = async () => {
    let data = await fetch("http://localhost:3000/api/user/" + id);
    data = await data.json();
    setName(data.data.name);
    setAge(data.data.age);
    setEmail(data.data.email);
  };

  async function updateUser() {
    let data = await fetch("http://localhost:3000/api/user/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    data = await data.json();
    console.log(data);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="div_center">
      <h2>User Details Update </h2>
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

        <button onClick={updateUser} type="submit">
          Update User
        </button>
      </form>
    </div>
  );
}
