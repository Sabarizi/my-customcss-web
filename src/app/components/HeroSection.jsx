// HeroSection.jsx
import styles from'../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}><span>Experience</span> <br /> IN BEAUTY</h1>
        <p className={styles.description}>
          Over the span of 40 years, we have been monumental in launching and crafting professional careers of hundreds of female models who have later been or are presently considered highly successful in the entertainment industry all over the world.
        </p>
        <div className={styles.buttons}>
          <button className={styles.learnMore}>Learn More</button>
          <button className={styles.appointment}>Appointment</button>
        </div>
      </div>
    </section>
  );
}
