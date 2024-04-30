import styles from "./MainContent.module.scss";
import UserList from "../UserList/UserList";
import UserForm from "../UserForm/UserForm";
import Search from "../UserSearch/UserSearch";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <Search />
      <UserForm />
      <UserList />
    </div>
  );
};

export default MainContent;
