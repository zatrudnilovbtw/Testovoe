import styles from './EmployeeHero.module.css'
import PictureSection from './components/PictureSection/PictureSection'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import PersonalDocs from './components/PersonalDocs/PersonalDocs'
import PersonalCareer from './components/PersonalCareer/PersonalCareer'
export default function EmployeeHero(){
    return(
        <div className={styles.EmployeeHeroSection}>
            <div className={styles.heroContent}>
                <PictureSection/>
                <div className={styles.infoBlock}>
                <PersonalInfo/>
                </div>
                <div className={styles.documentsBlock}>
                <PersonalDocs/>
                </div>
                <div className={styles.careerBlock}>
                <PersonalCareer/>
                </div>
            </div>
        </div>
    )
}