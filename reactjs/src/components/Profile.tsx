import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Robson16.png" alt="Robson" />
      <div>
        <strong>Robson H. Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nível 1
        </p>
      </div>
    </div>
  );
}
