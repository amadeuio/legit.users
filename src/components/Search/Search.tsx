import styles from "./Search.module.scss";
import { useFiltersContext } from "../../context/FiltersContext";

const Search = () => {
  const { filters, setFilters } = useFiltersContext();
  const { query } = filters;

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setFilters({ ...filters, query: newQuery });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      {/* <SearchIcon className={styles.searchIcon} /> */}
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
