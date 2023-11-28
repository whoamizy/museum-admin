import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const ContentPlate = ({ children }: PropsWithChildren) => {
  return <div className={styles.contentPlate}>{children}</div>;
};
