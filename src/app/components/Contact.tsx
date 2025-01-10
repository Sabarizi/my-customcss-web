// contact.tsx

"use client"; // Add this at the very top of the file

import { useState } from 'react';
import styles from '../styles/contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Here, you can add functionality to handle form submission (e.g., sending data to a backend)
  };

  return (
 
    <div className={styles.container} id='Contact'>
      <h2 className={styles.title}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
 
  );
};

export default Contact;
