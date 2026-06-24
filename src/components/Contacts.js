import React from 'react';
import styles from './Contacts.module.css';
import vkIcon from '../images/vk.png';

const Contacts = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.address}>
              <strong>Центр физической подготовки спортсменов в межсезонье:</strong>
              <br />
              Район "Столетие", пр-кт 100-летия Владивостока, 30д
              <br />
              Стадион "Строитель"
            </p>
            <p className={styles.phone}>
              <strong>Тел: 250-66-76</strong>
            </p>
            <p className={styles.email}>
              e-mail: primsnowboard@mail.ru
            </p>
          </div>
          <div className={styles.socials}>
            <p className={styles.socialTitle}>Мы в соц сетях</p>
            <div className={styles.socialIcons}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img 
                  src={vkIcon}
                  alt="VK" 
                  className={styles.socialIcon} 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;