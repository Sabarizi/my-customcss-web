import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>My Website</h1>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#Services">Services</Link></li>
        <li><Link href="#Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
