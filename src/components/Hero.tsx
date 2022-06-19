import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.scss';

import heroImg_landscape from '../assets/image-hero-landscape.webp';
import curvedLine from '../assets/pattern-curved-line-1.svg';

export default function Hero() {
  const [screenSize, setScreenSize]: any = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth);
    });
  });

  // * MOBILE VIEWPORT
  if (screenSize < 768) {
    return (
      <section className={styles.hero_mobile}>
        <div className={styles.hero_mobileCopy}>
          <h1>
            A <span>super solution</span> for your <span>business.</span>
            <img src={curvedLine} alt='' />
          </h1>

          <p>
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>

          <button>Request Beta Access</button>
        </div>

        <img src={heroImg_landscape} alt='' />

        <div className={styles.hero_mobileStats}>
          <div>
            <h3>2K +</h3>
            <p>companies</p>
          </div>
          <div>
            <h3>8</h3>
            <p>languages</p>
          </div>
          <div>
            <h3>1.2M</h3>
            <p>leads</p>
          </div>
        </div>
      </section>
    );
  }

  // * TABLET VIEWPORT
  else if (screenSize > 767 && screenSize < 1240) {
    return (
      <section className={styles.hero_tablet}>
        <div className={styles.hero_tabletCopy}>
          <h1>
            A <span>super solution</span> for your <span>business.</span>
            <img src={curvedLine} alt='' />
          </h1>
          <p>
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
          <button>Request Beta Access</button>
        </div>

        <div className={styles.hero_tabletStats}>
          <div>
            <h3>2K +</h3>
            <p>companies</p>
          </div>
          <div>
            <h3>8</h3>
            <p>languages</p>
          </div>
          <div>
            <h3>1.2M</h3>
            <p>leads</p>
          </div>
        </div>
      </section>
    );
  }

  // * DESKTOP VIEWPORT
  else {
    return (
      <section className={styles.hero_desktop}>
        <div className={styles.hero_desktopWrapper}>
          <div className={styles.hero_desktopCopy}>
            <h1>
              A <span>super solution</span> for your <span>business.</span>
              <img src={curvedLine} alt='' />
            </h1>
            <p>
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </p>
            <button>Request Beta Access</button>
          </div>

          <div className={styles.hero_desktopStats}>
            <div>
              <h3>2K +</h3>
              <p>companies</p>
            </div>
            <div>
              <h3>8</h3>
              <p>languages</p>
            </div>
            <div>
              <h3>1.2M</h3>
              <p>leads</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
