import styles from './TableOfContent.module.css';
import { employees } from '@/data/mock/employees';
import Image from 'next/image';
import filter_alt from '@/public/Images/filter_alt.svg';

export default function TableOfContent() {
    const employee = employees[0];

    return (
        <div className={styles.TableOfContent}>
            <button className={styles.btnAdd}>+ Добавить обращение</button>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                №
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Медкарта
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Тип обращения
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Сотрудник
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Локация
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Дата и время
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Статус
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Результат (диагноз, заключение)
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                        <th className={styles.tableHeader}>
                            <div className={styles.headerContent}>
                                Создал
                                <Image
                                    src={filter_alt}
                                    alt="Filter"
                                    className={styles.filterIcon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employee.appeals?.map((appeal) => (
                        <tr key={appeal.id} className={styles.tableRow}>
                            <td className={styles.tableCell}>{appeal.id}</td>
                            <td className={styles.tableCell}>{appeal.medcardNumber}</td>
                            <td className={styles.tableCell}>{appeal.type}</td>
                            <td className={styles.tableCell}>{appeal.employee}</td>
                            <td className={styles.tableCell}>{appeal.location}</td>
                            <td className={styles.tableCell}>{appeal.date}</td>
                            <td className={styles.tableCell}>
                                <span
                                    className={
                                        appeal.status === 'Завершено'
                                            ? styles.statusDone
                                            : appeal.status === 'В работе'
                                                ? styles.statusInwork
                                                : ''
                                    }
                                >
                                    {appeal.status}
                                </span>
                            </td>
                            <td className={styles.tableCell}>{appeal.result}</td>
                            <td className={styles.tableCell}>{appeal.creator}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}