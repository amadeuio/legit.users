import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
