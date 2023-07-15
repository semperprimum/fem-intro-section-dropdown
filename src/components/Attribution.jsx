import styles from "./attribution.module.scss";

export function Attribution() {
  return (
    <footer class={styles.attribution}>
      Challenge by {""}
      <a
        href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5/hub"
        target="_blank"
      >
        Frontend Mentor
      </a>
      , Coded by{" "}
      <a
        href="https://github.com/semperprimum"
        target="_blank"
        rel="noopener noreferrer"
      >
        semperprimum
      </a>
    </footer>
  );
}
