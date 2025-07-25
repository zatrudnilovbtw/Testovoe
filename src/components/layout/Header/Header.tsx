import Image from 'next/image';
import arrow from '@/public/Images/arrow.svg';
import chain from '@/public/Images/chain.svg';
import profilepic from '@/public/Images/profilepic.svg';
import styles from './Header.module.css';
import { Employee, employees,systemUser,systemUsers } from '@/data/mock';


export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonIcon}>
                    <Image
                        src={arrow}
                        alt="arrow icon"
                        width={15}
                        height={12}
                    />
                </div>
                <span>В работников</span>
            </div>
            <div className={styles.workersName}>
                <p>{employees[0].fullName}</p>
                <div className={styles.chain}>
                    <Image
                        src={chain}
                        alt="chain icon"
                        width={19}
                        height={19}
                    />
                </div>
            </div>
            <div className={styles.rightSide}>
                <select className={styles.select}>
                    <option value="option1">Здравпункт 1</option>
                    <option value="option2">Здравпункт 2</option>
                    <option value="option3">Здравпункт 3</option>
                </select>

                <div className={styles.userContainer}>
                    <Image
                        src={profilepic}
                        alt="profilepic icon"
                        width={24}
                        height={24}
                    />
                    <div className={styles.userName}>
                        <p>{systemUsers[0].fullName}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}