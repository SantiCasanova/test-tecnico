import styles from './Modal.module.css'
import { RiCloseLine } from 'react-icons/ri'
import MobileForm from './MobileForm'

function Modal({ isOpen }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => isOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Contactar</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => isOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <MobileForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
