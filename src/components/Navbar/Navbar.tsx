import styles from "./Navbar.module.scss";
import { useFiltersContext } from "../../context/FiltersContext";
import FavoriteIcon from "../../icons/FavoriteIcon";

const Navbar = () => {
  const { filters, setFilters } = useFiltersContext();
  const { favorite } = filters;

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !filters.favorite });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img className={styles.logo} src="/logo-hands.png" alt="Logo Hands" />
        <h1>LEGIT.USERS</h1>
      </div>
      <div className={styles.right}>
        <div onClick={handleFavoriteClick}>
          <FavoriteIcon
            className={`${styles.favoriteIcon} ${favorite ? styles.favorite : ""}`}
            isFilled={favorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
