import styles from "./Base-Input.module.scss";

export default function BaseInput({ label, ...props }: any) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}
