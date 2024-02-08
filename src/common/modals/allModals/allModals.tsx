import { Login } from "../login/login";
import { Register } from "../register/register";
import styles from "./allModals.module.scss";
export const AllModals = () => {
  return (
    <div className={styles.container}>
      <Login />
      <Register />
    </div>
  );
};
