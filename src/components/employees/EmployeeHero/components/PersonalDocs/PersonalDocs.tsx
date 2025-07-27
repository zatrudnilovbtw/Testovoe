'use client'; // Указываем, что это клиентский код
import styles from './PersonalDocs.module.css'
import Image from 'next/image';
import editcard from '@/public/Images/editcard.svg';
import copyicon from '@/public/Images/copyicon.svg';
import { Employee } from '@/data/mock/employees';
import { Modal } from '@/components/modals/Modal/Modal'
import { useModal } from '@/hooks/useModal';
import { PersonalDocsProps } from '@/types/props';
import AddModal from '@/components/modals/AddModal/AddModal';
import React from 'react';


export default function PersonalDocs({ employee }: PersonalDocsProps) {
    const { documents } = employee;
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [isAddModalOpen, setAddModalOpen] = React.useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const openAddModal = () => {
        setModalOpen(false);
        setAddModalOpen(true);
    };
    const closeAddModal = () => {
        setAddModalOpen(false);
        setModalOpen(false); 
    };

    return (
        <div className={styles.PersonalDocs}>
            <div className={styles.headerBlock}>
                <p className={styles.title}>данные документов</p>
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
                <span className={styles.label}>Вид документа</span>
                <span className={styles.value}>{documents?.type}</span>

                <span className={styles.label}>Серия и номер</span>
                <span className={styles.rowWithIcon}>
                    {documents?.series} {documents?.number}
                    <Image
                        src={copyicon}
                        alt="copy icon"
                        width={10}
                        height={10}
                        className={styles.copyIcon}
                    />
                </span>


                <span className={styles.label}>Дата выдачи</span>
                <span className={styles.value}>{documents?.issueDate}</span>

                <span className={styles.label}>Кем выдан</span>
                <span className={styles.value}>{documents?.issuedBy}</span>

                <span className={styles.label}>Код подразд.</span>
                <span className={styles.value}>{documents?.code}</span>

                <span className={styles.label}>СНИЛС</span>
                <span className={styles.value}>{documents?.snils}</span>

                <span className={styles.label}>ИНН</span>
                <span className={styles.value}>{documents?.inn}</span>

                <span className={styles.label}>Полис ОМС</span>
                <span className={styles.value}>{documents?.omsNumber}</span>

                <span className={styles.label}>Полис ДМС</span>
                <span className={styles.value}>{documents?.dmsNumber}</span>
            </div>

            <button className={styles.btn} onClick={openModal}>
        Подробнее
      </button>

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    employee={employee}
                    onAddClick={openAddModal}
                />
            )}
            {isAddModalOpen && (
                <AddModal isOpen={isAddModalOpen} onClose={closeAddModal} />
            )}
        </div>
    )
}
