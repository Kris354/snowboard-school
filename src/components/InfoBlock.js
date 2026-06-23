import React from 'react';
import styles from './InfoBlock.module.css';

const InfoBlock = () => {
  return (
    <section className={styles.infoBlock}>
      <div className={styles.container}>
        <p className={styles.text}>
          Тренировки в спортивной школе проводятся КРУГЛЫЙ ГОД. В весенний, летний и осенний
          периоды (межсезонье) тренировки проходят в форме ОФП (формирование широкого круга
          двигательных умений и навыков, развития чувства баланса), детских спортивных игр,
          состязаний, катания на скейтбордах.
        </p>
        <p className={styles.text}>
          Тренировочный процесс направлен не только на повышение уровня катания на сноуборде,
          но и на развитие важных физических и моральных качеств.
        </p>
      </div>
    </section>
  );
};

export default InfoBlock;