import { Button } from '@consta/uikit/Button'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { ArrowIcon } from 'shared/assets/icons'
import { useNavigate } from 'react-router-dom'

interface Props {
  isSubmitting?: boolean
  isDisabled?: boolean
  onSave(): void
}

export const SaveBar = ({ isSubmitting, isDisabled, onSave }: Props) => {
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
        type="submit"
        label={t('general.save')}
        onClick={onSave}
        loading={isSubmitting}
        disabled={isDisabled}
      />
    </div>
  )
}