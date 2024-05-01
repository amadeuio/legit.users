import UserSearch from "../../UserSearch/UserSearch";
import UserFavorite from "../../UserFavorite/UserFavorite";
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <UserSearch />
      <UserFavorite className={styles.userFavorite} />
    </div>
  );
};

export default Filters;
