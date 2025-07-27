import styles from './EmployeeHero.module.css'
import PictureSection from './components/PictureSection/PictureSection'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import PersonalDocs from './components/PersonalDocs/PersonalDocs'
import PersonalCareer from './components/PersonalCareer/PersonalCareer'
import { employees } from '@/data/mock/employees';

export default function EmployeeHero(){
    const employee = employees[0]; // Берем первого сотрудника из массива
    return(
        <div className={styles.EmployeeHeroSection}>
            <div className={styles.heroContent}>
                <PictureSection/>
                <div className={styles.infoBlock}>
                <PersonalInfo employee={employee} />
                </div>
                <div className={styles.documentsBlock}>
                <PersonalDocs employee={employee}/>
                </div>
                <div className={styles.careerBlock}>
                <PersonalCareer employee={employee}/>
                </div>
            </div>
        </div>
    )
}