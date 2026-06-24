import React from 'react';
import styles from './Team.module.css';
import trener2 from '../images/trener2.jpg'; // ТОЛЬКО ТЕРЕНТЬЕВ

const Team = () => {
  const coaches = [
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
          <div key={index} className={styles.card}>
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