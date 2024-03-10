import React from 'react';
import styles from '../styles/Theme.module.css'
import github from '../logo/github.png'
import telegram from '../logo/telegram.png'
import twitter from '../logo/twitter.png'
import Image from 'next/image';

const Footer= () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://github.com"  className={styles.socialImg}>
          <Image src={github} alt="GitHub Logo" />
        </a>
        <a href="https://telegram.org"  className={styles.socialImg}>
          <Image src={telegram} alt="Telegram Logo" />
        </a>
        <a href="https://twitter.com"  className={styles.socialImg}>
          <Image src={twitter} alt="Twitter Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
