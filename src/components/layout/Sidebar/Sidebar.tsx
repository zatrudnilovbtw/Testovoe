import Image from 'next/image';
import EvrazLogo from '@/public/Images/EVRAZ_logo.svg';
import back from '@/public/Images/back.svg';
import search from '@/public/Images/search.svg';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.divider}></div>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <a href="/">
          <Image
            src={EvrazLogo}
            alt="EVRAZ Logo"
            width={200}
            height={30}
            priority
          />
          </a>
          
        </div>
        <button className={styles.backBtn}>
          <Image
            src={back}
            alt="Back button"
            width={30}
            height={30}
          />
        </button>
        <div className={styles.searchContainer}>
          <div className={styles.searchIconWrapper}>
            <Image
              src={search}
              alt='search icon'
              width={24}
              height={24}
            />
          </div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder='ФИО, табельный №'
          />
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span className={styles.mainItem}>Работники</span>
          </li>
          <li className={styles.navItem}>
            <a href="/employees" className={`${styles.subItem} ${styles.active}`}>
              База работников
              {/* <span className={styles.indicator}></span> */}
            </a>
          </li>
          <li className={`${styles.navItem} ${styles['block-end']}`}>
            <span className={styles.subItem}>Карьерные записи</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Обращения</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Приемы</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Медицинские осмотры</span>
          </li>
          <li className={styles.navItem}>
            <span className={`${styles.subItem} ${styles.deep}`}>Периодические</span>
          </li>
          <li className={styles.navItem}>
            <span className={`${styles.subItem} ${styles.deep}`}>Предварительные</span>
          </li>
          <li className={styles.navItem}>
            <span className={`${styles.subItem} ${styles.deep}`}>Предсменные</span>
          </li>
          <li className={`${styles.navItem} ${styles['block-end']}`}>
            <span className={`${styles.subItem} ${styles.deep}`}>ОПО</span>
          </li>
          
          <li className={styles.navItem}>
            <span className={styles.subItem}>Неотложная экстренная помощь</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Направления</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Вакцинации</span>
          </li>
          <li className={`${styles.navItem} ${styles['block-end']}`}>
            <span className={styles.subItem}>Больничные листы</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Журналы</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Отчеты</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Отчеты по мед. деятельности</span>
          </li>
          <li className={`${styles.navItem} ${styles['block-end']}`}>
            <span className={styles.subItem}>BI-аналитика</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Склад</span>
          </li>
          <li className={`${styles.navItem} ${styles['block-end']}`}>
            <span className={styles.subItem}>Учет мед. препаратов</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Анкетирование</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Бракераж</span>
          </li>
          
          <li className={`${styles.navItem} ${styles['main-item']}`}>
            <span className={styles.mainItem}>Администрирование</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Пользователи</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Организации</span>
          </li>
          <li className={styles.navItem}>
            <span className={styles.subItem}>Локации</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}