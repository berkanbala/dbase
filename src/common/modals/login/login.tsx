import { Button } from "../../components/ui/button/button";
import styles from "./login.module.scss";
export const Login = () => {
  return (
    <div className={styles.container}>
      <Button type="submit" text={"Login"} />
    </div>
  );
};
