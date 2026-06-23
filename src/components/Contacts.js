import React from 'react';
import styles from './Contacts.module.css';
import vkIcon from '../images/vk.png'; 
import instIcon from '../images/inst.png'; 

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
            </p>
            <p className={styles.address}>
              <strong>Стадион "Строитель"</strong>
            </p>
            <p className={styles.phone}>
              <strong>Тел: 250-66-76</strong>
            </p>
            
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
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={instIcon}
                    alt="Instagram" 
                    className={styles.socialIcon} 
                  />
                </a>
              </div>
            </div>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Ваше имя" className={styles.input} />
            <input type="tel" placeholder="Номер телефона" className={styles.input} />
            <textarea placeholder="Ваше сообщение" className={styles.textarea} rows="4" />
            <button type="submit" className={styles.button}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;