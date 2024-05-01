import SearchIcon from "../../../icons/SearchIcon";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import { useFiltersContext } from "../../../context/FiltersContext";
import styles from "./Filters.module.scss";

const Filters = () => {
  const { filters, setFilters } = useFiltersContext();
  const { favorite } = filters;
  const { query } = filters;

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setFilters({ ...filters, query: newQuery });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !filters.favorite });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.userSearch}>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
          <SearchIcon className={styles.searchIcon} />
          <input type="text" placeholder="Search" value={query} onChange={handleChange} />
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
