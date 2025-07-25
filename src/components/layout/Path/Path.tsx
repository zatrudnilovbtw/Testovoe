// src/components/layout/Path/Path.tsx
import styles from './Path.module.css'
import Image from 'next/image'
import arrowRight from '@/public/Images/arrowRight.svg';

export default function Path(){
    // Захардкоженный путь для демонстрации
    const pathSegments = [
        { name: 'Работники', href: '/employees' },
        { name: 'База работников', href: '/employees' },
        { name: 'Константинопольский Константин Константинович', href: '/employees/1' }
    ];

    return(
        <div className={styles.pathContainer}>
            {pathSegments.map((segment, index) => (
                <span key={index} className={styles.pathItem}>
                    {index > 0 && (
                        <Image 
                            src={arrowRight} 
                            alt=">" 
                            width={14} 
                            height={24} 
                            className={styles.arrowIcon} 
                        />
                    )}
                    <span className={styles.pathLink}>
                        {segment.name}
                    </span>
                </span>
            ))}
        </div>
    )
}