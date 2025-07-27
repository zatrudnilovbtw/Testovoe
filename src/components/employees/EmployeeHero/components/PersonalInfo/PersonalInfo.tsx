import styles from './PersonalInfo.module.css';
import Image from 'next/image';
import editcard from '@/public/Images/editcard.svg';
import phone from '@/public/Images/phone.svg';
import copyicon from '@/public/Images/copyicon.svg';

import { Employee } from '@/data/mock/employees';

interface PersonalInfoProps {
    employee: Employee;
}

export default function PersonalInfo({ employee }: PersonalInfoProps) {
    const { personalInfo } = employee;

    // Функция для подсчёта возраста
    const calculateAge = (birthDate: string) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div className={styles.PersonalInfo}>
            <div className={styles.headerBlock}>
                <p className={styles.title}>Личные данные</p>
                <div className={styles.imageContainer}>
                    <Image
                        src={editcard}
                        alt="editcard icon"
                        width={12}
                        height={12}
                    />
                </div>
            </div>

            <div className={styles.infoSection}>
                <span className={styles.label}>Фамилия</span>
                <span className={styles.value}>{personalInfo?.lastName}</span>

                <span className={styles.label}>Имя</span>
                <span className={styles.value}>{personalInfo?.firstName}</span>

                <span className={styles.label}>Отчество</span>
                <span className={styles.value}>{personalInfo?.middleName}</span>

                <span className={styles.label}>Дата рождения</span>
                <span className={styles.valueDate}>
                    {personalInfo?.birthDate}
                    <span className={styles.age}>
                    <span className={styles.age}>
                        {calculateAge(personalInfo?.birthDate?? "")} лет
                        </span>

                    </span>
                    <Image
                        src={copyicon}
                        alt="copy icon"
                        width={10}
                        height={10}
                        className={styles.copyIcon}
                    />
                </span>

                <span className={styles.label}>Пол</span>
                <span className={styles.value}>{personalInfo?.gender}</span>

                <span className={styles.label}>Место рождения</span>
                <span className={styles.value}>{personalInfo?.birthPlace}</span>

                <span className={styles.label}>Гражданство</span>
                <span className={styles.value}>{personalInfo?.citizenship}</span>

                <span className={styles.label}>Моб. телефон</span>
                <div className={styles.phoneRow}>
                    <span className={styles.valuePhone}>
                        {personalInfo?.phone.mobile}
                        <Image
                            src={phone}
                            alt="phone icon"
                            width={10}
                            height={10}
                        />
                    </span>
                    <Image
                        src={copyicon}
                        alt="copy icon"
                        width={10}
                        height={10}
                        className={styles.copyIcon}
                    />
                </div>

                <span className={styles.label}>Раб. телефон</span>
                <div className={styles.phoneRow}>
                    <span className={styles.valuePhone}>
                        {personalInfo?.phone.work}
                        <Image
                            src={phone}
                            alt="phone icon"
                            width={10}
                            height={10}
                        />
                    </span>
                    <Image
                        src={copyicon}
                        alt="copy icon"
                        width={10}
                        height={10}
                        className={styles.copyIcon}
                    />
                </div>


                <span className={styles.label}>Email</span>
                <span className={styles.value}>{personalInfo?.email}</span>

                <span className={styles.label}>Адрес <br />регистрации</span>
                <span className={styles.value}>{personalInfo?.address}</span>
            </div>
        </div>
    );
}
