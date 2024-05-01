import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";

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
