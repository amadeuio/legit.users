import styles from "./MainContent.module.scss";
import UserList from "../UserList/UserList";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <UserList />
    </div>
  );
};

export default MainContent;
