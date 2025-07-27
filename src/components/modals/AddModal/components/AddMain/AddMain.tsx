import React, { useState } from 'react';
import styles from './AddMain.module.css';
import { MainProps } from '@/types/props';

export default function Main({ employee }: MainProps) {
  const { documents } = employee;

  function toInputDate(dateStr: string | undefined): string {
    if (!dateStr) return '';
    if (dateStr.includes('-')) return dateStr; // уже в нужном формате
    const [day, month, year] = dateStr.split('.');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }



  

  return (
    <div className={styles.container}>
      <p className={styles.mainTitle}>Основные данные</p>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Вид документа <span className={styles.marker}>*</span></label>
          <select className={styles.input} value="Паспорт" disabled>
            <option>Паспорт</option>
            <option>Водительские права</option>
            <option>Свидетельство о рождении</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Серия<span className={styles.marker}>*</span></label>
          <input
            type="number"
            className={styles.input}
            value={documents?.series || '00 00'}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>№ паспорта<span className={styles.marker}>*</span></label>
          <input
            type="number"
            className={styles.input}
            value={documents?.number || '000 000'}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Дата выдачи<span className={styles.marker}>*</span></label>
          <input
            type="date"
            className={styles.input}
            value={toInputDate(documents?.issueDate)}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Код подразделения<span className={styles.marker}>*</span></label>
          <input
            type="text"
            className={styles.input}
            value={documents?.code || '000-000'}
            readOnly
          />
        </div>
      </div>
      {/* Второй ряд */}
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Кем выдан<span className={styles.marker}>*</span></label>
          <input
            type="text"
            className={styles.input}
            value={documents?.issuedBy || ''}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>СНИЛС<span className={styles.marker}>*</span></label>
          <input
            type="text"
            className={styles.input}
            value={documents?.snils || '000-000-000 00'}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>ИНН<span className={styles.marker}>*</span></label>
          <input
            type="text"
            className={styles.input}
            value={documents?.inn || '00 00 0000000'}
            readOnly
          />
        </div>
      </div>
      {/* Третий ряд */}
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Полис ДМС</label>
          <input
            type="text"
            className={styles.input}
            value={documents?.dmsNumber || '0000000000000000'}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formGroupLabel}>Полис ОМС </label>
          <input
            type="text"
            className={styles.input}
            value={documents?.omsNumber || '0000000000000000'}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}