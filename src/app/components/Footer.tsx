// footer.tsx

"use client"; // If you want to use client-side interactivity

import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="/" className={styles.footerLink}>Home</a>
        <a href="#contact" className={styles.footerLink}>Contact</a>
        <a href="#Services" className={styles.footerLink}>Services</a>
      </div>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
