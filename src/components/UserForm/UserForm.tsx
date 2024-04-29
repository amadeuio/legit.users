import styles from "./UserForm.module.scss";
import { useState } from "react";
import { useUsersContext } from "../../UsersContext";

const UserForm = () => {
  const { users, setUsers } = useUsersContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: users.length + 1,
          first_name: firstName,
          last_name: lastName,
          email: email,
          avatar: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user.");
      }

      const data = await response.json();
      setUsers([...users, data]);
      setSuccessMessage("User created successfully!");
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
      // Reset the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.userForm}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit" disabled={loading}>
        Create User
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default UserForm;
