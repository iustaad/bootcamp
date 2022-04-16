import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.topnav}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="demoform">
            <a>Demo Form</a>
          </Link>
        </li>
        <li>
          <Link href="form">
            <a>Form</a>
          </Link>
        </li>
        <li>
          <Link href="report">
            <a>Report</a>
          </Link>
        </li>
        <li>
          <Link href="testing">
            <a>Testing</a>
          </Link>
        </li>
        <li className={styles.right}>
          <Link href="login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
