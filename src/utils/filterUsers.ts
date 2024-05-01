import { User } from "../types/User";
import { Filters } from "../types/Filters";

// Returns true if the user matches the query, otherwise false
function matchesQuery(user: User, query: string) {
  const getCleanData = (str) => {
    // Remove white spaces and convert to lowercase
    return str.replace(/\s+/g, "").toLowerCase();
  };

  const getCleanQuery = (str) => {
    // Remove white spaces and convert to lowercase
    const lowercaseNoSpaces = str.replace(/\s+/g, "").toLowerCase();

    // Remove symbols
    const cleanQuery = lowercaseNoSpaces.replace(/[^\w\s]/gi, "");

    return cleanQuery;
  };

  const cleanQuery = getCleanQuery(query);

  // If there's a clean query, perform checks
  if (cleanQuery) {
    const { first_name, last_name } = user;
    const data = first_name + last_name;
    return getCleanData(data).includes(cleanQuery);
  }

  // If there's no query it's always a match
  return true;
}

// Returns true always, except if the favorite filter is is true and user.isFavorite is false
function matchesFavorite(user: User, favorite: boolean) {
  if (favorite && !user.isFavorite) {
    return false;
  }

  return true;
}

// Returns an array of Users that match the filters
function filterUsers(users: User[], filters: Filters) {
  const { favorite, query } = filters;

  const filteredUsers = users.filter((user) => {
    const favoriteMatch = matchesFavorite(user, favorite);
    const queryMatch = matchesQuery(user, query);

    return favoriteMatch && queryMatch;
  });

  return filteredUsers;
}

export default filterUsers;
