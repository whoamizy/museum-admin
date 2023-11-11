import { DeleteIcon, EditIcon } from 'shared/assets/icons'
import styles from './styles.module.scss'

export const ExhibitionItem = () => {

  return (
    <div className={styles.line}>
      <div className={styles.lineCategory}>
        <div className={styles.previewBack}>
          {/* <img className={styles.previewImage} src={imageUrl} alt="превью" /> */}
        </div>
      </div>
      <div className={styles.lineCategory}>
        {/* {title} */}
      </div>
      <div className={styles.lineCategory}>
        {/* {title} */}
      </div>
      <div className={styles.lineCategory}>
        <div className={styles.edit} onClick={() => { }}>
          <EditIcon />
        </div>
        <div className={styles.delete} onClick={() => { }}>
          <DeleteIcon />
        </div>
      </div>
    </div >
  )
}
