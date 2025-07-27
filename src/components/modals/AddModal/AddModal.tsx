import React from 'react';
import styles from './AddModal.module.css';
import AddHeader from './components/AddHeader/AddHeader';
import AddMain from './components/AddMain/AddMain';
import AddFooter from './components/AddFooter/AddFooter'
import { AddModalProps } from '@/types/props';
import { employees } from '@/data/mock/employees';

const AddModal = ({ isOpen, onClose }: AddModalProps) => {
  if (!isOpen) return null;
  const employee = employees[0];
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <header>
          <AddHeader onClose={onClose}/>
        </header>
        <main>
          <AddMain employee={employee}/>
        </main>
        <footer>
          <AddFooter employee={employee} onClose={onClose} />
        </footer>
      </div>
    </div>
  );
};

export default AddModal; 