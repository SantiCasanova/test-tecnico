import styles from './RightSide.module.css'
import Form from './Form'

function RightSide() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactar</h1>
      <Form />
    </div>
  )
}

export default RightSide
