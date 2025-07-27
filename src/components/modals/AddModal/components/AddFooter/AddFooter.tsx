import styles from './AddFooter.module.css'
import { MainProps } from '@/types/props';

interface AddFooterProps extends MainProps {
  onClose: () => void;
}

export default function AddFooter({ employee, onClose }: AddFooterProps){
    const { documents } = employee;

    // Добавляю функцию преобразования даты для input type="date"
    function toInputDate(dateStr: string | undefined): string {
      if (!dateStr) return '';
      if (dateStr.includes('-')) return dateStr;
      // Пример: если duration = 'До 2027 года', то преобразуем в '2027-12-31'
      const match = dateStr.match(/(\d{4})/);
      if (match) {
        return `${match[1]}-12-31`;
      }
      return '';
    }

    return(
        <footer>
            <p className={styles.mainTitle}>Дополнительные данные</p>
            <div className={styles.row}>

            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Страховая компания</label>
                <input
            type="text"
            className={styles.input}
            value={documents?.Insurancecompany}
            readOnly
          />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Длительность страхования </label>
                <input
            type="date"
            className={styles.input}
            value={toInputDate(documents?.duration)}
            readOnly
          />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Адрес постоянной регистрации</label>
                <input
            type="text"
            className={styles.input}
            value={documents?.registration}
            readOnly
          />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Фактический адрес проживания</label>
                <input
            type="text"
            className={styles.input}
            value={documents?.actualplace}
            readOnly
          />
            </div>
            </div>

            <div className={styles.btnWrapper}>
                <button className={styles.btnSave}>Сохранить</button>
                <button
                 className={styles.btnReject}
                 onClick={onClose}
                 >
                    Отменить
                 </button>
            </div>
        </footer>
    )
 }