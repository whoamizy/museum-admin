import { Collection } from "entities/collection"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useDeleteCollection } from "shared/api"
import { queryClient } from "shared/providers"
import styles from './styles.module.scss'
import cn from 'classnames'
import { DeleteIcon, EditIcon, PlusIcon } from "shared/assets/icons"

export const CollectionsItem = ({ _id, name }: Collection) => {
  const { t } = useTranslation()
  const { mutateAsync: deleteCollection } = useDeleteCollection()

  const deleteHandler = async () => {
    await deleteCollection(_id, {
      onSuccess: () => {
        toast.success(t('news.successDelete'))
        queryClient.refetchQueries({ queryKey: ['collections'] })
      },
      onError: () => {
        toast.success(t('news.errorDelete'))
      }
    })
  }

  return (
    <div className={styles.line}>
      <div className={styles.lineCategory}>
        {name}
      </div>
      <div className={cn(styles.lineCategory, styles.actions)}>
        <div className={styles.plus} onClick={() => { }}>
          <PlusIcon />
        </div>
        <div className={styles.edit} onClick={() => { }}>
          <EditIcon />
        </div>
        <div className={styles.delete} onClick={deleteHandler}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}
