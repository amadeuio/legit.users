import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  const userId = 1;

  return (
    <div className={styles.userDetails}>
      <h2>User Details</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;
