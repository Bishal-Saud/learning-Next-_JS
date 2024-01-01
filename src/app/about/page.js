"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(`/about/${path}`);
  };
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <button onClick={() => navigate("aboutstudents")}>About Student</button>
      <button onClick={() => navigate("aboutcollage")}>About Collage</button>
      <br />
      <button onClick={() => router.push("/")}>Home page</button>
      <button onClick={() => router.push("login")}>Login page</button>
    </div>
  );
};

export default About;
