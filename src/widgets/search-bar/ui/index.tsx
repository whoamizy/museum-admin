import { TextField } from "@consta/uikit/TextField";
import styles from "./styles.module.scss";
import { SearchIcon } from "shared/assets/icons";
import { useAuth } from "shared/providers";
import { useTranslation } from "react-i18next";

interface Props {
  value: string | null;
  setValue(val: string | null): void;
  placeholder?: string;
}

export const SearchBar = ({ value, setValue, placeholder }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <TextField
          className={styles.input}
          type="text"
          width="full"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          leftSide={SearchIcon}
          withClearButton
        />
      </div>
      {!!user && (
        <div className={styles.user}>
          {t("general.greeting", { name: user.username })}
        </div>
      )}
    </div>
  );
};
