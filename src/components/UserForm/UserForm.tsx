import styles from "./UserForm.module.scss";
import { useUsersContext } from "../../context/UsersContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { User } from "../../types/User";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { users, setUsers } = useUsersContext();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isFavChecked, setIsFavChecked] = useState(false);

  const fetchRandomAvatar = async (): Promise<string> => {
    try {
      const response = await fetch("https://randomuser.me/api/?inc=picture");

      if (!response.ok) {
        throw new Error("Failed to fetch random user data");
      }

      const userData = await response.json();
      return userData.results[0].picture.large;
    } catch (error) {
      throw new Error("Failed to fetch random user avatar");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Fetch a random avatar
      const avatarUrl = await fetchRandomAvatar();

      const newUser: User = {
        id: users.length + 1,
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        avatar: avatarUrl,
        createdAt: null, // Server will provide this info
        isFavorite: isFavChecked,
      };

      // Make POST request to create user
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const responseData = await response.json();
      setUsers([responseData, ...users]);
      reset(); // Reset the form after successful submission

      setSuccessMessage("User created successfully");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to create user. Please try again");
      setSuccessMessage(null);
      throw new Error(error.message || "Something went wrong");
    }
  };

  const handleFavoriteChange = () => {
    setIsFavChecked(!isFavChecked);
  };

  const clearMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <div className={styles.userForm}>
      <h2 className={styles.title}>Add User</h2>
      <form onSubmit={handleSubmit(onSubmit)} onFocus={clearMessages} className={styles.form}>
        <label>
          <div className={styles.labelTitle}>First Name</div>
          <input
            type="text"
            {...register("firstName", { required: true })}
            placeholder="John"
            className={errors.firstName ? styles.errorInput : ""}
          />
          {errors.firstName && <p>This field is required.</p>}
        </label>
        <label>
          <div className={styles.labelTitle}>Last Name</div>
          <input
            type="text"
            {...register("lastName", { required: true })}
            placeholder="Doe"
            className={errors.lastName ? styles.errorInput : ""}
          />
          {errors.lastName && <p>This field is required.</p>}
        </label>
        <label>
          <div className={styles.labelTitle}>Email</div>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="john.doe@example.com"
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && <p>This field is required.</p>}
        </label>
        <label className={styles.checkboxLabel}>
          <div className={styles.checkboxContainer}>
            <div
              className={`${styles.checkbox} ${isFavChecked ? styles.checked : ""}`}
              onClick={handleFavoriteChange}
            />
            <div className={styles.labelTitle}>Favorite</div>
          </div>
        </label>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        <button type="submit">
          <img className={styles.logo} src="/logo-hands.png" alt="Logo Hands" />
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
