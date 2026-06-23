import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>ШКОЛА СНОУБОРДА</h1>
        <p className={styles.subtitle}>
          Приморское региональное отделение федерации <br /> сноуборда России.
        </p>
      </div>
    </section>
  );
};

export default Hero;