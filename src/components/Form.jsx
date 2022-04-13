import styles from './Form.module.css'
import Button from './Button'

function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form className={styles.inputForm}>
          <input
            className={`${styles.text} ${styles.input}`}
            type='text'
            placeholder='Nombre'
          />
          <input
            className={`${styles.text} ${styles.input}`}
            type='email'
            placeholder='Email'
          />
          <textarea
            className={`${styles.textArea} ${styles.input}`}
            type='text'
            placeholder='Mensaje'
          />
        </form>
        <Button title='Enviar' />
      </div>
      <p className={styles.textInfo}>
        También puedes contactar por tel: +34931154415 o mail a
        info@grupoagrinews.com
      </p>
    </div>
  )
}

export default Form
