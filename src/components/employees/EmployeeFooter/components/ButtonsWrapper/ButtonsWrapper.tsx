"use client"
import styles from './ButtonsWrapper.module.css'
import { useState } from 'react';
import { employeeTabs } from '@/data/mock/employees';

export default function ButtonsWrapper() {
    const [activeTab, setActiveTab] = useState('appeals');

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