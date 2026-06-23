import React from 'react';
import styles from './Schedule.module.css';

const Schedule = () => {
  const scheduleData = [
    { day: 'Понедельник', time: '18:00 – 20:00', place: 'Стадион "Строитель"' },
    { day: 'Среда', time: '18:00 – 20:00', place: 'Стадион "Строитель"' },
    { day: 'Пятница', time: '18:00 – 20:00', place: 'Стадион "Строитель"' },
    { day: 'Воскресенье', time: '9:00 – 11:00', place: 'Набережная Цесаревича' },
  ];

  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Расписание</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>День</th>
                <th>Начало – конец</th>
                <th>Место проведения</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.note}>
          * место и время проведения тренировок могут изменяться. <br />
          Актуальную информацию уточняйте у тренера.
        </p>
      </div>
    </section>
  );
};

export default Schedule;