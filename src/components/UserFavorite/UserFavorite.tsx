import styles from "./UserFavorite.module.scss";
import { useFiltersContext } from "../../context/FiltersContext";
import FavoriteIcon from "../../icons/FavoriteIcon";

const UserFavorite = ({ className }) => {
  const { filters, setFilters } = useFiltersContext();
  const { favorite } = filters;

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !filters.favorite });
  };

  return (
    <div className={styles.UserFavorite} onClick={handleFavoriteClick}>
      <FavoriteIcon className={`${styles.favoriteIcon} ${className}`} isFilled={favorite} />
    </div>
  );
};

export default UserFavorite;
