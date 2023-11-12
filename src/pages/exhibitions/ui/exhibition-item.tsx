import { DeleteIcon, EditIcon } from 'shared/assets/icons'
import styles from './styles.module.scss'
import { Exhibition } from 'entities/exhibition'
import { AppLinks, Path } from 'shared/enums'
import { env } from 'shared/utils'
import { useTranslation } from 'react-i18next'
import { useDeleteExhibition } from 'shared/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { queryClient } from 'shared/providers'
import cn from "classnames"

export const ExhibitionItem = ({ _id, images, name, address, price }: Exhibition) => {
  const imageUrl = `${env.apiUrl}${Path.GET_IMAGE}${images[0]}`
  const { t } = useTranslation()
  const { mutateAsync: deleteExhibition } = useDeleteExhibition()
  const navigate = useNavigate()

  const deleteHandler = async () => {
    await deleteExhibition(_id, {
      onSuccess: () => {
        toast.success(t('exhibitions.successDelete'))
        queryClient.refetchQueries({ queryKey: ['exhibitions'] })
      },
      onError: () => {
        toast.success(t('exhibitions.errorDelete'))
      }
    })
  }

  const navigateToEdit = () => {
    navigate(`${AppLinks.EXHIBITIONS}/${_id}`)
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
        {address}
      </div>
      <div className={styles.lineCategory}>
        {t('exhibitions.priceValue', { value: price })}
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
