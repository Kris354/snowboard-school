import React from 'react';
import styles from './Team.module.css';
import trener1 from '../images/trener1.jpg';
import trener2 from '../images/trener2.jpg';

const Team = () => {
  const coaches = [
    {
      name: 'Гордейчук Валерий Викторович',
      role: 'Тренировки у группы начальной подготовки ведёт инструктор по сноуборду категории "B-basic" Гордейчук Валерий Викторович.',
      description:
        'Благодаря индивидуальному подходу начинающим спортсменам, каждый ребёнок формируется сильной, целеустремлённой личностью.',
      image: trener1,
    },
    {
      name: 'Терентьев Сергей Анатольевич',
      role: 'Тренировки старшей группы ведёт руководитель Приморского отделения Федерации Сноуборда России, а по совместительству главный тренер Сборной Приморского края по Сноуборду Сергей Анатольевич Терентьев.',
      description:
        'Под его чутким руководством тренируются спортсмены, создающие достойную конкуренцию главным составам сборных из других регионов.',
      image: trener2,
    },
  ];

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Тренерский состав</h2>

        {coaches.map((coach, index) => (
          <div
            key={index}
            className={`${styles.card} ${index % 2 === 1 ? styles.cardReverse : ''}`}
          >
            <div className={styles.imageWrapper}>
              <img src={coach.image} alt={coach.name} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>{coach.name}</h3>
              <p className={styles.role}>{coach.role}</p>
              <p className={styles.description}>{coach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;