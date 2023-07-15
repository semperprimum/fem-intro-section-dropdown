import styles from "./button.module.scss";

export function Button(props) {
  return <button className={styles.button}>{props.children}</button>;
}
