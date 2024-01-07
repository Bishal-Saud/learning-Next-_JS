import Link from "next/link";
import "./about.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="login_menu">
        <h4>About Navbar</h4>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutstudents">About Students</Link>
        </li>
        <li>
          <Link href="/about/aboutcollage">About collage</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
