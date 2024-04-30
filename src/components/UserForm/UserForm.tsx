import styles from "./UserForm.module.scss";
import { useUsersContext } from "../../UsersContext";
import { useForm } from "react-hook-form";
import { useState } from "react";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { users, setUsers } = useUsersContext();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: users.length + 1,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          avatar: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user.");
      }

      const responseData = await response.json();
      setUsers([responseData, ...users]);
      reset(); // Reset the form after successful submission
      setSuccessMessage("User created successfully.");
      setErrorMessage(null);
    } catch (error) {
      console.error(error.message || "Something went wrong.");
      setErrorMessage("Failed to create user. Please try again.");
      setSuccessMessage(null);
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
        <input type="text" {...register("firstName", { required: true })} />
        {errors.firstName && <p>This field is required.</p>}
      </label>
      <label>
        Last Name:
        <input type="text" {...register("lastName", { required: true })} />
        {errors.lastName && <p>This field is required.</p>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p>This field is required.</p>}
      </label>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
