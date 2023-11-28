import { Button } from "@consta/uikit/Button";
import styles from "./styles.module.scss";
import logo from "shared/assets/images/logo.png";
import { useAuth } from "shared/providers";
import { useTranslation } from "react-i18next";
import { links } from "../lib/links";
import { SidebarLink } from "shared/components";

export const Sidebar = () => {
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={logo} alt="логотип" />
        </div>
        <div className={styles.links}>
          <ul>
            {links.map(({ name, path, Icon }) => (
              <li key={name}>
                <SidebarLink name={name} path={path} Icon={Icon} />
              </li>
            ))}
          </ul>
        </div>
        <Button width="full" onClick={logout} label={t("general.exit")} />
      </div>
    </div>
  );
};
