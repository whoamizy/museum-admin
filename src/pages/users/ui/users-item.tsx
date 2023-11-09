import { User } from 'entities/user'
import cn from 'classnames'
import styles from './styles.module.scss'
import { DeleteIcon } from 'shared/assets/icons'
import { useDeleteUser } from 'shared/api'
import { toast } from 'react-toastify'
import { queryClient } from 'shared/providers'
import { useTranslation } from 'react-i18next'

export const UsersItem = ({ email, username, _id }: User) => {
  const { t } = useTranslation()
  const { mutateAsync: deleteUser } = useDeleteUser()

  const deleteHandler = async () => {
    await deleteUser(_id, {
      onSuccess: () => {
        toast.success(t('users.successDelete'))
        queryClient.refetchQueries({ queryKey: ['users'] })
      },
      onError: () => {
        toast.success(t('users.errorDelete'))
      }
    })
  }

  return (
    <div className={styles.line}>
      <div className={styles.lineCategory}>{username}</div>
      <div className={styles.lineCategory}>{email}</div>
      <div className={cn(styles.lineCategory, styles.actions)}>
        <div className={styles.delete} onClick={deleteHandler}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}