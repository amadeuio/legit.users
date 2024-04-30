import styles from "./Navbar.module.scss";
import { useFiltersContext } from "../../context/FiltersContext";

const Navbar = () => {
  const { filters, setFilters } = useFiltersContext();

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !filters.favorite });
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/logo-hands.png" alt="Logo Hands" />
      <h1>LEGIT.USERS</h1>
      <div onClick={handleFavoriteClick}>Fav</div>
    </div>
  );
};

export default Navbar;
