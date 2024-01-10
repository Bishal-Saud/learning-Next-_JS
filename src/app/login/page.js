"use client";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(`/login/${path}`);
  };
  return (
    <div>
      <h1 className="heading">Login Page</h1>

      <button onClick={() => router.push("/")}>Home page</button>
      <button onClick={() => router.push("about")}>About page</button>
    </div>
  );
};

export default Login;
