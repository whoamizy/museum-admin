import { User } from 'entities/user'
import cn from 'classnames'
import styles from './styles.module.scss'
import { DeleteIcon } from 'shared/assets/icons'

export const UsersItem = ({ email, username, _id }: User) => {
  const deleteHandler = () => {
    console.log(_id)
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