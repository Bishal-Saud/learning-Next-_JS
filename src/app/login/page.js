"use client";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(`/login/${path}`);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <button onClick={() => navigate("loginstudent")}>Student Login</button>
      <button onClick={() => navigate("loginteacher")}>Teacher Login</button>
      <br />
      <br />
      <button onClick={() => router.push("/")}>Home page</button>
      <button onClick={() => router.push("about")}>About page</button>
    </div>
  );
};

export default Login;
