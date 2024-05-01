import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import styles from "./UsersSection.module.scss";
import { User } from "../../types/User";
import { useUsersContext } from "../../context/UsersContext";
import ChevronIcon from "../../icons/ChevronIcon";
import filterUsers from "../../utils/filterUsers";
import { useFiltersContext } from "../../context/FiltersContext";
import UserList from "./UserList/UserList";
import Filters from "./Filters/Filters";

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1&per_page=12");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

const UsersSection = () => {
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

  const filteredUsers = filterUsers(users, filters);
  const filteredUserCount = filteredUsers.length;

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 6;
  const offset = currentPage * usersPerPage;

  let currentUsers = [];

  if (filteredUserCount > usersPerPage) {
    // Only slice if there are more users than usersPerPage
    currentUsers = filteredUsers.slice(offset, offset + usersPerPage);
  } else {
    currentUsers = filteredUsers;
  }

  const pageCount = Math.ceil(filteredUserCount / usersPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className={styles.usersSection}>
      <h2 className={styles.title}>
        Users
        <span className={styles.userCount}>
          <span className={styles.emDash}>—</span>
          {filteredUserCount}
        </span>
      </h2>

      <Filters />
      <UserList userList={currentUsers} />

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

export default UsersSection;
