import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        {t('general.notFound')}
      </div>
    </div >
  )
}
