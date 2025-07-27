import styles from './AddHeader.module.css'
import close from '@/public/Images/close.svg';
import Image from 'next/image';
import React from 'react';

export default function Header({ onClose }: { onClose: () => void }){
    
    return(
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>Добавление данных документов</div>
          <button onClick={onClose}>
            <Image
              src={close}
              alt="close"
              width={13}
              height={13}
            />
          </button>
        </div>
    )
}