import { Ticket } from "entities/ticket"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useDeleteTicket } from "shared/api"
import { queryClient } from "shared/providers"
import styles from './styles.module.scss'
import cn from 'classnames'
import { DeleteIcon } from "shared/assets/icons"
import format from "date-fns/format"

export const TicketsItem = ({ _id, exhibition, user, date, time }: Ticket) => {
  const { t } = useTranslation()
  const { mutateAsync: deleteTicket } = useDeleteTicket()

  const deleteHandler = async () => {
    await deleteTicket(_id, {
      onSuccess: () => {
        toast.success(t('tickets.successDelete'))
        queryClient.refetchQueries({ queryKey: ['tickets'] })
      },
      onError: () => {
        toast.success(t('tickets.errorDelete'))
      }
    })
  }

  const formattedDateAndTime = format(new Date(date), "dd.MM.yyyy")

  return (
    <div className={styles.line}>
      <div className={styles.lineCategory}>{exhibition.name}</div>
      <div className={styles.lineCategory}>{user.username}</div>
      <div className={styles.lineCategory}>{t('tickets.dateAndTimeValues', { date: formattedDateAndTime, time })}</div>
      <div className={cn(styles.lineCategory, styles.actions)}>
        <div className={styles.delete} onClick={deleteHandler}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}
