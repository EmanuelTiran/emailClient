import styles from './style.module.css'
export default function Budge({children}) {
  return (
    <span className={styles.main}>
      {children}
    </span>
  )
}
