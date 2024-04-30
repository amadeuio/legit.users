import styles from "./UserForm.module.scss";
import { useUsersContext } from "../../UsersContext";
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
        email: "example@example.com",
        first_name: "John",
        last_name: "Doe",
        avatar: avatarUrl,
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

  const clearMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onFocus={clearMessages} className={styles.userForm}>
      <label>
        First Name:
        <input type="text" {...register("firstName", { required: true })} defaultValue="John" />
        {errors.firstName && <p>This field is required.</p>}
      </label>
      <label>
        Last Name:
        <input type="text" {...register("lastName", { required: true })} defaultValue="Doe" />
        {errors.lastName && <p>This field is required.</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          {...register("email", { required: true })}
          defaultValue="john.doe@example.com"
        />
        {errors.email && <p>This field is required.</p>}
      </label>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
