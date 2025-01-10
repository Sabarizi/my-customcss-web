"use client"; // If you want to use client-side interactivity

import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/" className={styles.footerLink}>Home</Link>
        <Link href="#contact" className={styles.footerLink}>Contact</Link>
        <Link href="#Services" className={styles.footerLink}>Services</Link>
      </div>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
