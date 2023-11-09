import { NewsItem as NewsItemType } from "entities/news"
import { Path } from "shared/enums"
import { env } from "shared/utils"
import styles from './styles.module.scss'
import cn from "classnames"
import { DeleteIcon, EditIcon } from "shared/assets/icons"
import { useTranslation } from "react-i18next"
import { useDeleteNewsItem } from "shared/api"
import { toast } from "react-toastify"
import { queryClient } from "shared/providers"

export const NewsItem = ({ _id, imageId, title }: NewsItemType) => {
  const imageUrl = `${env.apiUrl}${Path.GET_IMAGE}${imageId}`
  const { t } = useTranslation()
  const { mutateAsync: deleteNewsItem } = useDeleteNewsItem()

  const deleteHandler = async () => {
    await deleteNewsItem(_id, {
      onSuccess: () => {
        toast.success(t('news.successDelete'))
        queryClient.refetchQueries({ queryKey: ['news'] })
      },
      onError: () => {
        toast.success(t('news.errorDelete'))
      }
    })
  }

  return (
    <div className={styles.line}>
      <div className={cn(styles.lineCategory, styles.preview)}>
        <div className={styles.previewBack}>
          <img className={styles.previewImage} src={imageUrl} alt="превью" />
        </div>
      </div>
      <div className={cn(styles.lineCategory, styles.itemTitle)}>
        {title}
      </div>
      <div className={cn(styles.lineCategory, styles.actions)}>
        <div className={styles.edit}>
          <EditIcon />
        </div>
        <div className={styles.delete} onClick={deleteHandler}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}
