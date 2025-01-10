import styles from '../styles/services.module.css';

const Services = () => {
  return (
    <section className={styles.services} id='Services'>
      <h2>Services</h2>
     

      <div className={styles.serviceItem}>
        <h3>Facial & Therapy</h3>
        <p>
          Rose Beauty Parlour has introduced a wide range of unique, amazing & effective facials which give you the best results by removing blackheads & dead skin cells, purifying skin, and improving the radiance of the skin.
        </p>
      </div>

      <div className={styles.serviceItem}>
        <h3>Bridal Makeup</h3>
        <p>
          Calling out all the brides! Experience our Signature Bridal Makeover by Ramsha Ehsan, Satwat Ehsan, and Tasneem Nafees. Our Experts will give you a classic, traditional or modern makeover; you deserve nothing but the best.
        </p>
      </div>

      <div className={styles.serviceItem}>
        <h3>Hair Styling</h3>
        <p>
          Great-looking hair is only a few steps away. Rose Beauty Parlour presents new hair looks, trendy styling & amazing color trends. Book a haircut, hairstyle, or hair color session at Rose Beauty Parlour.
        </p>
      </div>

      <div className={styles.serviceItem}>
        <h3>Make up</h3>
        <p>
          Rose Beauty Parlour has introduced a wide range of trendy, amazing & latest makeup techniques. Signature soft & glowy look with subtle shades, perfect contouring, and highlighter for your special occasion.
        </p>
      </div>
    </section>
  );
};

export default Services;
