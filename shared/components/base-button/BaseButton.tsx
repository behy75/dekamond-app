import styles from "./Base-Button.module.scss";

export default function BaseButton({ onClick, children }: any) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
