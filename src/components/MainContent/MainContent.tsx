import styles from "./MainContent.module.scss";
import UserList from "../UserList/UserList";
import UserAdd from "../UserAdd/UserAdd";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <UserAdd />
      <UserList />
    </div>
  );
};

export default MainContent;
