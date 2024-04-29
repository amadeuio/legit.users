import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import styles from "./UserDetails.module.scss";

async function fetchUser(id: string) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function UserDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["user", id], () => fetchUser(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching user data</div>;

  return (
    <div className={styles.userDetails}>
      <h1>
        {data.data.first_name} {data.data.last_name}
      </h1>
      <p>Email: {data.data.email}</p>
      <p>
        <img className={styles.avatar} src={data.data.avatar} alt="User Avatar" />
      </p>
    </div>
  );
}

export default UserDetails;
