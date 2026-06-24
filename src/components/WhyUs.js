import React from 'react';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Почему стоит выбрать нас?</h2>
        <ul className={styles.list}>
          <li>
            <strong>🏆 Опытные тренеры</strong>
            <p>Профессиональные инструкторы с многолетним стажем и действующие спортсмены.</p>
          </li>
          <li>
            <strong>🧠 Индивидуальный подход</strong>
            <p>Мы работаем с каждым учеником, учитывая его уровень и цели — от новичка до профи.</p>
          </li>
          <li>
            <strong>💪 Физическое и моральное развитие</strong>
            <p>Тренировки помогают не только освоить сноуборд, но и стать сильнее, увереннее и дисциплинированнее.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;