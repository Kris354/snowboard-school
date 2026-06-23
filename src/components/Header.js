import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const navItems = [
    { label: 'Наша команда', href: '#team' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Расписание', href: '#schedule' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;