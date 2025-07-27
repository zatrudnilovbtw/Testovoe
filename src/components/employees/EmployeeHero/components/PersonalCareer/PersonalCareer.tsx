import styles from './PersonalCareer.module.css'
import Image from 'next/image';
import copyicon from '@/public/Images/copyicon.svg';
import personBtn from '@/public/Images/personBtn.svg';
import { Employee } from '@/data/mock/employees';

interface PersonalCareerProps {
    employee: Employee;
}

export default function PersonalCareer({ employee }: PersonalCareerProps) {
    const { career } = employee;

    return (
        <div className={styles.PersonalCareer}>
            <div className={styles.headerBlock}>
                <p className={styles.title}>карьера</p>
                <div className={styles.workContainer}>
                    <div className={styles.indicator}></div>
                    <p>Работает</p>
                </div>
            </div>
            <div className={styles.infoSection}>

                <span className={styles.label}>Таб. номер</span>
                <span className={styles.rowWithIcon}>
                    {career?.tabNumber}
                    <Image
                        src={copyicon}
                        alt="copy icon"
                        width={10}
                        height={10}
                        className={styles.copyIcon}

                    />
                </span>

                <span className={styles.label}>Должность</span>
                <span className={styles.value}>{career?.position}</span>

                <span className={styles.label}>Код цеха</span>
                <span className={styles.rowWithIcon}>
                    {career?.department}
                    <Image
                        src={copyicon}
                        alt="copy icon"
                        width={10}
                        height={10}
                        className={styles.copyIcon}
                    />
                </span>


                <span className={styles.label}>Организация</span>
                <span className={styles.value}>{career?.organization}</span>
                <span className={styles.label}>Подразделение</span>
                <span className={styles.value}>{career?.subdivision}</span>
                <span className={styles.label}>Участок/бригада</span>
                <span className={styles.value}>{career?.brigade}</span>
                <span className={styles.label}>Дата устройства</span>
                <span className={styles.value}>{career?.employmentDate}</span>
                <span className={styles.label}>Вредные факторы</span>
                <span className={styles.value}>{career?.harmfulFactors}</span>
            </div>

            <div className={styles.buttons}>
                <button className={styles.addBtn}>+  Добавить запись</button>

                <button className={styles.allRecordsBtn}>
                    <Image
                        src={personBtn}
                        alt="personBtn icon"
                        width={12}
                        height={12}
                    />
                    <div>Все трудовые записи</div>
                    <div>{career?.records}</div>
                </button>


            </div>

        </div>
    )
}