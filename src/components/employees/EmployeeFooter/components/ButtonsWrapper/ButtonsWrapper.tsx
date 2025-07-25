"use client"
import styles from './ButtonsWrapper.module.css'
import { useState } from 'react';
import { employeeTabs } from '@/data/mock/employees';

export default function ButtonsWrapper() {
    // Состояние для отслеживания активного таба
    const [activeTab, setActiveTab] = useState('appeals');

    // Обработчик клика по табу
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div className={styles.ButtonsWrapper}>
            {employeeTabs.map(tab => (
                <button 
                    key={tab.id}
                    className={`${styles.btn} ${activeTab === tab.id ? styles.active : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    {tab.name} <span className={styles.tabCount}>{tab.count}</span>
                </button>
            ))}
        </div>
    )
}