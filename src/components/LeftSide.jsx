import styles from './LeftSide.module.css'
import UserMenu from './UserMenu'

function LeftSide(props) {
  return (
    <div className={styles.leftSide}>
      <img className={styles.image} src='./userPicture.png' alt='userPicture' />
      <h1 className={styles.title}>Bienvenido {props.user}</h1>
      <UserMenu />
    </div>
  )
}

export default LeftSide
