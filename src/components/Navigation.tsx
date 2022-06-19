import styles from '../styles/styles.module.scss';
import logo from '../assets/logo.svg';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <img src={logo} alt='' className={styles.logo} />
      <button className={styles.button}>Request Beta Access</button>
    </nav>
  );
}
