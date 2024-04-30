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

type SubmitStatus = "idle" | "loading" | "success" | "error";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { users, setUsers } = useUsersContext();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
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
      setSubmitStatus("loading");
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

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");

      throw new Error(error.message || "Something went wrong");
    }
  };

  const handleFavoriteChange = () => {
    setIsFavChecked(!isFavChecked);
  };

  const clearMessage = () => {
    setSubmitStatus("idle");
  };

  return (
    <div className={styles.userForm}>
      <h2 className={styles.title}>Add User</h2>

      <form onSubmit={handleSubmit(onSubmit)} onFocus={clearMessage} className={styles.form}>
        <div className={styles.formGrid}>
          <label>
            <div className={styles.labelTitle}>First Name</div>
            <input
              type="text"
              {...register("firstName", { required: true })}
              placeholder="John"
              className={errors.firstName ? styles.errorInput : ""}
            />
            <p>{errors.firstName && <>This field is required.</>}</p>
          </label>
          <label>
            <div className={styles.labelTitle}>Last Name</div>
            <input
              type="text"
              {...register("lastName", { required: true })}
              placeholder="Doe"
              className={errors.lastName ? styles.errorInput : ""}
            />
            <p>{errors.lastName && <>This field is required.</>}</p>
          </label>
          <label>
            <div className={styles.labelTitle}>Email</div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="john.doe@example.com"
              className={errors.email ? styles.errorInput : ""}
            />
            <p>{errors.email && <>This field is required.</>}</p>
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
        </div>

        {submitStatus === "loading" && <p className={styles.submitMessage}>Loading...⏳</p>}

        {submitStatus === "success" && (
          <p className={`${styles.submitMessage} ${styles.success}`}>
            User created successfully ✅
          </p>
        )}

        {submitStatus === "error" && (
          <p className={`${styles.submitMessage} ${styles.error}`}>Error:</p>
        )}

        <button type="submit">
          <img className={styles.logo} src="/logo-hands.png" alt="Logo Hands" />
          <span className={styles.label}>Create User</span>
        </button>
      </form>
    </div>
  );
};

export default UserForm;
