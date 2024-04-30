import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import styles from "./UserList.module.scss";
import UserItem from "./UserItem/UserItem";
import { User } from "../../types/User";
import { useUsersContext } from "../../context/UsersContext";
import fetchUsers from "../../utils/fetchUsers";
import ChevronIcon from "../../icons/ChevronIcon";
import filterUsers from "../../utils/filterUsers";
import { useFiltersContext } from "../../context/FiltersContext";

const UserList = () => {
  const { users, setUsers } = useUsersContext();
  const { filters } = useFiltersContext();
  const { data, isLoading, isError } = useQuery<User[], Error>("users", fetchUsers);

  useEffect(() => {
    if (data && !users.length) {
      /* !users.length ensures this block only runs when users has not been set, 
      so only the first time the the data is fetched. This prevents the problem of form added 
      users being overwritten later on */

      const updatedUsers = data.map((user) => ({
        ...user,
        createdAt: null,
        isFavorite: false,
      }));

      setUsers(updatedUsers);
    }
  }, [data]);

  // Testing
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const filteredUsers = filterUsers(users, filters);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 6;
  const offset = currentPage * usersPerPage;

  let currentUsers = [];

  if (filteredUsers.length > usersPerPage) {
    // Only slice if there are more users than usersPerPage
    currentUsers = filteredUsers.slice(offset, offset + usersPerPage);
  } else {
    currentUsers = filteredUsers;
  }

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className={styles.userList}>
      <h2>User List</h2>
      <ul className={styles.list}>
        {currentUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        nextLabel={<ChevronIcon className={styles.chevronIcon} direction="right" />}
        previousLabel={<ChevronIcon className={styles.chevronIcon} direction="left" />}
        containerClassName={styles.paginate}
        pageLinkClassName={styles.page}
        previousLinkClassName={styles.previous}
        nextLinkClassName={styles.next}
        activeLinkClassName={styles.active}
        disabledLinkClassName={styles.disabled}
      />
    </div>
  );
};

export default UserList;
