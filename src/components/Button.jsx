import styles from './Button.module.css'

function Button(props) {
  return (
    <button type='button' className={styles.button}>
      {props.title}
    </button>
  )
}

export default Button
