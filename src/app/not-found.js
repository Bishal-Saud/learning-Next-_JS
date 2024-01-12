import Link from "next/link";
import style from "./page.module.css";
import clear from "./style/other.module.css";
export default function NotFound() {
  return (
    <div className={style.error}>
      <h1>This page is not available !</h1>
      <Link className={clear.beauty} href="/login">
        Go back to login
      </Link>
    </div>
  );
}
