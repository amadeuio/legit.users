import styles from "./UserSearch.module.scss";
import { useFiltersContext } from "../../../../context/FiltersContext";
import SearchIcon from "../../../../icons/SearchIcon";

const UserSearch = () => {
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
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <SearchIcon className={styles.searchIcon} />
        <input type="text" placeholder="Search" value={query} onChange={handleChange} />
      </form>
    </div>
  );
};

export default UserSearch;
