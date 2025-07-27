import { Employee } from '@/data/mock/employees';

// Для PersonalInfo
export interface PersonalInfoProps {
    employee: Employee;
  }
  
  // Для PersonalDocs
  export interface PersonalDocsProps {
    employee: Employee;
  }
  
  // Для PersonalCareer
  export interface PersonalCareerProps {
    employee: Employee;
  }
  
  // Для Main (модалка)
  export interface MainProps {
    employee: Employee;
  }
  
  // Для самой модалки
  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    employee: Employee;
    onAddClick?: () => void;
  }
  export interface AddModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  export interface FooterProps {
    onAddClick: () => void;
    onClose: () => void;
  }
  