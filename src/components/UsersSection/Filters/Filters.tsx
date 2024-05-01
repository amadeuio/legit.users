import { useFiltersContext } from "../../../context/FiltersContext";
import SearchIcon from "../../../icons/SearchIcon";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import styles from "./Filters.module.scss";

const Filters = () => {
  const { filters, setFilters } = useFiltersContext();
  const { favorite, query } = filters;

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setFilters({ ...filters, query: newQuery });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !filters.favorite });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.userSearch}>
        <form className={styles.searchBar} onSubmit={(e) => handleSubmit(e)}>
          <SearchIcon className={styles.searchIcon} />
          <input type="text" placeholder="Search" value={query} onChange={(e) => handleChange(e)} />
        </form>
      </div>

      <div className={styles.userFavorite} onClick={handleFavoriteClick}>
        <FavoriteIcon
          className={`${styles.favoriteIcon} ${favorite ? styles.favorite : ""}`}
          isFilled={favorite}
        />
      </div>
    </div>
  );
};

export default Filters;
