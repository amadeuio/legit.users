import styles from "./MainContent.module.scss";
import UsersSection from "../UsersSection/UsersSection";
import UserAdd from "../UserAdd/UserAdd";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <UserAdd />
      <UsersSection />
    </div>
  );
};

export default MainContent;
