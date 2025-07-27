import styles from './Footer.module.css'
import Image from 'next/image'
import editPensil from '@/public/Images/editPensil.svg';
import { FooterProps } from '@/types/props';

export default function Footer({ onAddClick, onClose }: FooterProps) {
    return (
        <footer className={styles.footerDataContainer}>
            <div className={styles.btnWrapper}>
                <button className={styles.addBtn} onClick={onAddClick}>+ Добавить данные</button>
                <button className={styles.redactBtn}>
                <Image
                                src={editPensil}
                                alt="editPensil"
                                width={10}
                                height={10}
                                className={styles.editPensil}
                            />
                    Изменить данные
                    
                    </button>
                <button 
                onClick={onClose}
                className={styles.rejectBtn}
                >
                    Отмена
                </button>
            </div>
        </footer>
    )
}