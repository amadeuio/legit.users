import UserAdd from "../UserAdd/UserAdd";
import UsersSection from "../UsersSection/UsersSection";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <UserAdd />
      <UsersSection />
    </div>
  );
};

export default MainContent;
