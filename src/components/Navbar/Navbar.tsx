import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img className={styles.logoHands} src="/logo-hands.png" alt="Logo Hands" />
          <h1>LEGIT.USERS</h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
