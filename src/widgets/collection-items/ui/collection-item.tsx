import { CollectionItem as CollectionItemType } from "entities/collection"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDeleteCollectionItem } from "shared/api"
import { AppLinks, Path } from "shared/enums"
import { queryClient } from "shared/providers"
import { env } from "shared/utils"
import styles from './styles.module.scss'
import cn from "classnames"
import { DeleteIcon, EditIcon } from "shared/assets/icons"

export const CollectionItem = ({ _id, imageId, name, author, year }: CollectionItemType) => {
  const imageUrl = `${env.apiUrl}${Path.GET_IMAGE}${imageId}`
  const { t } = useTranslation()
  const { mutateAsync: deleteCollectionItem } = useDeleteCollectionItem()
  const navigate = useNavigate()

  const deleteHandler = async () => {
    await deleteCollectionItem(_id, {
      onSuccess: () => {
        toast.success(t('collections.items.successDelete'))
        queryClient.refetchQueries({ queryKey: ['collection-items'] })
      },
      onError: () => {
        toast.success(t('collections.items.errorDelete'))
      }
    })
  }

  const navigateToEdit = () => {
    navigate(`${AppLinks.COLLECTIONS_ITEMS}/${_id}`)
  }

  return (
    <div className={styles.line}>
      <div className={styles.lineCategory}>
        <div className={styles.previewBack}>
          <img className={styles.previewImage} src={imageUrl} alt="превью" />
        </div>
      </div>
      <div className={styles.lineCategory}>
        {name}
      </div>
      <div className={styles.lineCategory}>
        {author ?? <div className={styles.undefined}>{t('general.undefined')}</div>}
      </div>
      <div className={styles.lineCategory}>
        {year ?? <div className={styles.undefined}>{t('general.undefined')}</div>}
      </div>
      <div className={cn(styles.lineCategory, styles.actions)}>
        <div className={styles.edit} onClick={navigateToEdit}>
          <EditIcon />
        </div>
        <div className={styles.delete} onClick={deleteHandler}>
          <DeleteIcon />
        </div>
      </div>
    </div >
  )
}