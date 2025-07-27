import React from 'react';
import styles from './Main.module.css';
import { Employee } from '@/data/mock/employees';
import { MainProps } from '@/types/props';
import Image from 'next/image';
import copyIcon from '@/public/Images/copyicon.svg';

export default function Main({ employee }: MainProps) {
    const { documents } = employee;

    return (
        <div>
            <div className={styles.mainCard}>
                <div className={styles.cardTitle}>Основные данные</div>
                <div className={styles.cardSubtitle}>Данные документов</div>
                <div className={styles.mainGrid}>
                    <div className={styles.cell}><span className={styles.label}>Вид документа</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.type}</span></div>
                    <div className={styles.cell}><span className={styles.label}>Код подразд.</span></div>
                    <div className={styles.cell}><span className={styles.value}>—</span></div>
                    <div className={styles.cell}><span className={styles.label}>Полис ОМС</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.omsNumber}</span></div>

                    <div className={styles.cell}><span className={styles.label}>Серия и номер</span></div>
                    <div className={styles.cell}>
                        <span className={styles.valueWithIcon}>
                            <span>{documents?.series}</span> <span>{documents?.number}</span>
                            <Image
                                src={copyIcon}
                                alt="Копировать данные"
                                width={10}
                                height={10}
                                className={styles.copyIcon}
                            />
                        </span>
                    </div>
                    <div className={styles.cell}><span className={styles.label}>СНИЛС</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.snils}</span></div>
                    <div className={styles.cell}><span className={styles.label}>Полис ДМС</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.dmsNumber}</span></div>

                    <div className={styles.cell}><span className={styles.label}>Дата выдачи</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.issueDate}</span></div>
                    <div className={styles.cell}><span className={styles.label}>ИНН</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.inn}</span></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>

                    <div className={styles.cell}><span className={styles.label}>Кем выдан</span></div>
                    <div className={styles.cell}><span className={styles.value}>{documents?.issuedBy}</span></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                </div>
            </div>

            <div className={styles.secondaryCard}>
                <div className={styles.cardTitle}>Дополнительные данные</div>
                <div className={styles.cardSubtitle}>Дополнительные данные документов</div>
                
                <div className={styles.secondaryContent}>
                    <div className={styles.row}>
                        <span className={styles.label}>Страховая компания</span>
                        <span className={styles.value}>{documents?.Insurancecompany}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Длительность страхования</span>
                        <span className={styles.value}>{documents?.duration}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Адрес постоянной регистрации (прописка)</span>
                        <span className={styles.value}>{documents?.registration}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Фактический адрес проживания</span>
                        <span className={styles.value}>{documents?.actualplace}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
