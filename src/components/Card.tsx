import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.scss';

import jeffSmall from '../assets/image-jeremy-small.webp';
import jeffLarge from '../assets/image-jeremy-large.webp';
import curvedLine from '../assets/pattern-curved-line-2.svg';

export default function Card() {
  const [screenSize, setScreenSize]: any = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <div className={styles.card}>
      <img
        src={screenSize > 1240 ? jeffLarge : jeffSmall}
        className={styles.jeff}
        alt=''
      />
      <div className={styles.sphere}></div>
      <img src={curvedLine} className={styles.curvedLine} alt='' />
      <div className={styles.cardContent}>
        <h3 className={styles.cardContent_heading}>
          It just <span>works</span>.
        </h3>
        <p className={styles.cardContent_quote}>
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <div className={styles.cardContent_info}>
          <h5>jeremy robson</h5>
          <p>CMO, FYLO</p>
        </div>
      </div>
    </div>
  );
}
