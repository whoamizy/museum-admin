import { useTranslation } from "react-i18next";
import { useAuth } from "shared/providers";
import { Combobox } from "@consta/uikit/Combobox";
import styles from "./styles.module.scss";
import { Exhibition } from "entities/exhibition";

interface Props {
  exhibitions: Exhibition[];
  selectedExhibition: Exhibition | null;
  setSelectedExhibition(val: Exhibition | null): void;
  dates: string[];
  selectedDate: string | null;
  setSelectedDate(val: string | null): void;
}

export const FilterTicketsBar = ({
  exhibitions,
  selectedExhibition,
  setSelectedExhibition,
  dates,
  selectedDate,
  setSelectedDate,
}: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <div className={styles.selectItem}>
          <Combobox
            placeholder={t("tickets.filters.exhibition")}
            items={exhibitions}
            value={selectedExhibition}
            onChange={({ value }) => setSelectedExhibition(value)}
            getItemLabel={({ name }) => name}
            getItemKey={({ _id }) => _id}
          />
        </div>
        <div className={styles.selectItem}>
          <Combobox
            placeholder={t("tickets.filters.date")}
            items={dates}
            value={selectedDate}
            onChange={({ value }) => setSelectedDate(value)}
            getItemLabel={(item) => item}
            getItemKey={(item) => item}
          />
        </div>
      </div>
      {!!user && (
        <div className={styles.user}>
          {t("general.greeting", { name: user.username })}
        </div>
      )}
    </div>
  );
};
