import { Button } from "../../components/ui/button/button";
import styles from "./register.module.scss";
export const Register = () => {
  return (
    <div className={styles.container}>
      <Button type="submit" text={"Register"} />
    </div>
  );
};
