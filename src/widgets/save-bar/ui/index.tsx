import { Button } from '@consta/uikit/Button'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { ArrowIcon } from 'shared/assets/icons'
import { useNavigate } from 'react-router-dom'

interface Props {
  onSave(): void
}

export const SaveBar = ({ onSave }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goBackHandler = () => {
    navigate(-1)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={goBackHandler}>
        <ArrowIcon width={50} height={50} />
      </div>
      <Button
        size="l"
        label={t('general.save')}
        onClick={onSave}
      />
    </div>
  )
}