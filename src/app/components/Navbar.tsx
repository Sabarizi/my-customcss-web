"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>My Website</h1>
      
      <button 
        className={styles.hamburger} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
      
      <ul 
        className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenu : ''}`}
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="#Services">Services</Link></li>
        <li><Link href="#Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
