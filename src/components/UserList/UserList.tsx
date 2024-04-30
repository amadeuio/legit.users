import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import styles from "./UserList.module.scss";
import UserItem from "./UserItem/UserItem";
import { User } from "../../types/User";
import { useUsersContext } from "../../UsersContext";
import fetchUsers from "../../utils/fetchUsers";

const UserList = () => {
  const { users, setUsers } = useUsersContext();
  const { data, isLoading, isError } = useQuery<User[], Error>("users", fetchUsers);

  useEffect(() => {
    if (data && !users.length) {
      /* !users.length ensures this block only runs when users has not been set, 
      so only the first time the component mounts. This prevents the problem of form added 
      users being overwritten later on */
      setUsers(data);
    }
  }, [data]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 6;
  const offset = currentPage * usersPerPage;
  const currentUsers = users.slice(offset, offset + usersPerPage);
  const pageCount = Math.ceil(users.length / usersPerPage);

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
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default UserList;
