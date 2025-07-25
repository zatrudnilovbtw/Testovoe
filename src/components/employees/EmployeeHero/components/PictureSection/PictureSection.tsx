import styles from './PictureSection.module.css'
import Image from 'next/image';
import image from '@/public/Images/image.png';
import editphoto from '@/public/Images/editphoto.svg';

export default function PictureSection(){
    return(
        <div className={styles.PictureSection}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt="profile picture"
                    width={280}
                    height={280}
                    className={styles.profileImage}
                />
                <button className={styles.editIconContainer}>
                    <Image
                        src={editphoto}
                        alt="edit icon"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    )
} 