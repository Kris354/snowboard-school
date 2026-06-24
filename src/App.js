import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBlock from './components/InfoBlock';
import WhyUs from './components/WhyUs'; // НОВЫЙ ИМПОРТ
import Team from './components/Team';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Contacts from './components/Contacts';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <InfoBlock />
        <WhyUs /> {/* НОВЫЙ БЛОК */}
        <Team />
        <Gallery />
        <Schedule />
        <Contacts />
      </main>
    </div>
  );
}

export default App;