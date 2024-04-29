import styles from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image
        width={303}
        height={275}
        className={styles.logo}
        src="/logo-hands.png"
        alt="Logo Hands"
      />
      <h1>LEGIT.USERS</h1>
    </div>
  );
};

export default Navbar;
