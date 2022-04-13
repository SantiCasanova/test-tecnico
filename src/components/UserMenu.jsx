import styles from './UserMenu.module.css'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Modal from '../components/mobile/Modal'

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1200px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1200px)'
  })

  return (
    <div className={styles.menu}>
      <span className={styles.option}>Revista digital y boletines</span>
      <span className={styles.option}>Mis Favoritos</span>
      <span className={styles.option}>Suscripciones</span>
      {isMobileDevice && (
        <span onClick={() => setIsOpen(true)} className={styles.option}>
          Contactar
        </span>
      )}
      {isOpen && <Modal isOpen={setIsOpen} />}
      {isDesktop && <span className={styles.option}>Contactar</span>}
      <span className={styles.option}>Anunciarse</span>
      <span className={styles.option}>Salir</span>
    </div>
  )
}

export default UserMenu
