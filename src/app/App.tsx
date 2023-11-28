import { Router } from "pages";
import { Sidebar } from "widgets/sidebar";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { AppLinks } from "shared/enums";
import { useAuth } from "shared/providers";
import { ContentLoader } from "widgets/content-loader";

export const App = () => {
  const { isLoading } = useAuth();
  const { pathname } = useLocation();

  const isSidebarVisible = pathname !== AppLinks.LOGIN;

  if (isLoading) {
    return <ContentLoader />;
  }

  return (
    <div className={styles.wrapper}>
      {isSidebarVisible && <Sidebar />}
      <div className={styles.pageWrapper}>
        <Router />
      </div>
    </div>
  );
};
