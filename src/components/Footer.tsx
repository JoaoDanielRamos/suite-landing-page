import styles from '../styles/styles.module.scss';

import logo from '../assets/logo.svg';
import logoFacebook from '../assets/icon-facebook.svg';
import logoInstagram from '../assets/icon-instagram.svg';
import logoTwitter from '../assets/icon-twitter.svg';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <img src={logo} alt='' />
        <p>
          Developed by <a href='https://www.joaoramos.com'>Joao Ramos</a> with
          React.
        </p>
        <div>
          <img src={logoFacebook} alt='' />
          <img src={logoTwitter} alt='' />
          <img src={logoInstagram} alt='' />
        </div>
      </div>
    </div>
  );
}
