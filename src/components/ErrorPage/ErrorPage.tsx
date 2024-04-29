import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>Page Not Found</h1>
      <Link to="/">
        <div className={styles.homeLink}>
          <img src="/logo-hands.png" className={styles.logo} />
          But you can go back home by clicking here!
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
