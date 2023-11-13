import { Collection } from "entities/collection"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useDeleteCollection } from "shared/api"
import { queryClient } from "shared/providers"
import styles from './styles.module.scss'
import cn from 'classnames'
import { ArrowIcon, DeleteIcon, EditIcon, PlusIcon } from "shared/assets/icons"
import { CollectionItems } from "widgets/collection-items"
import { useState } from "react"
import { EditCollectionForm } from "widgets/collections/edit"
import { useNavigate } from "react-router-dom"
import { AppLinks } from "shared/enums"

export const CollectionsItem = ({ _id, name }: Collection) => {
  const { t } = useTranslation()
  const { mutateAsync: deleteCollection } = useDeleteCollection()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const open = () => {
    setIsModalOpen(true)
  }

  const close = () => {
    setIsModalOpen(false)
  }

  const collapseCollection = () => {
    setIsCollapsed(prev => !prev)
  }

  const deleteHandler = async () => {
    await deleteCollection(_id, {
      onSuccess: () => {
        toast.success(t('collections.successDelete'))
        queryClient.refetchQueries({ queryKey: ['collections'] })
      },
      onError: () => {
        toast.success(t('collections.errorDelete'))
      }
    })
  }

  const navigateToNew = () => {
    navigate('/' + _id + AppLinks.COLLECTIONS_ITEMS + '/new')
  }

  return (
    <>
      <div className={styles.line}>
        <div className={cn(styles.lineCategory, styles.info)}>
          <div className={cn(styles.collapseButton, { [styles.collapsed]: isCollapsed })} onClick={collapseCollection}>
            <ArrowIcon />
          </div>
          {name}
        </div>
        <div className={cn(styles.lineCategory, styles.actions)}>
          <div className={styles.plus} onClick={navigateToNew}>
            <PlusIcon />
          </div>
          <div className={styles.edit} onClick={open}>
            <EditIcon />
          </div>
          <div className={styles.delete} onClick={deleteHandler}>
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className={cn(styles.collectionItems, { [styles.collapsed]: !isCollapsed })}>
        <div className={styles.collectionItemsInner}>
          <CollectionItems id={_id} />
        </div>
      </div>
      <EditCollectionForm id={_id} isOpen={isModalOpen} close={close} />
    </>
  )
}
