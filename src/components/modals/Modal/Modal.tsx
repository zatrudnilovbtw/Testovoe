'use client'; // Указываем, что это клиентский компонент

import styles from './Modal.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import AddModal from '../AddModal/AddModal';
import { Employee } from '@/data/mock/employees';
import { useModal } from '@/hooks/useModal';
import { ModalProps } from '@/types/props';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, employee, onAddClick }) => {
  const {
    isOpen: isAddModalOpen,
    openModal: openAddModal,
    closeModal: closeAddModal,
  } = useModal();

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header>
          <Header />
        </header>
        <main style={{ paddingBottom: '36px' }}>
          <Main employee={employee} />
        </main>
        <footer>
          <Footer onAddClick={onAddClick ?? (() => {})} onClose={onClose} />
        </footer>
        <AddModal isOpen={isAddModalOpen} onClose={closeAddModal} />
      </div>
    </div>
  );
};