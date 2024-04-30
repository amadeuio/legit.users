import styles from "./UserSearch.module.scss";
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
    <div className={styles.userSearch}>
      <h2>Search User</h2>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        {/* <SearchIcon className={styles.searchIcon} /> */}
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
