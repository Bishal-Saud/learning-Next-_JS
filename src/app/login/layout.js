import Link from "next/link";
import "./login.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="login_menu">
        <h4>Login Navbar</h4>
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Login Student</Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Login Teacher</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
