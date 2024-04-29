import styles from "./MainContent.module.scss";
import UserList from "../UserList/UserList";
import UserForm from "../UserForm/UserForm";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <UserForm />
      <UserList />
    </div>
  );
};

export default MainContent;
