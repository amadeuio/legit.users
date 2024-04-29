import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/logo-hands.png" alt="Logo Hands" />
      <h1>LEGIT.USERS</h1>
    </div>
  );
};

export default Navbar;
