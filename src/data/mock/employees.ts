export interface Employee{
    id: number;
    fullName: string;
    personalInfo?: {
        firstName: string;
        lastName: string;
        middleName: string;
        birthDate: string;
        age?: number;
        gender: 'мужской' | 'женский';
        birthPlace: string;
        citizenship: string;
        phone: {
            mobile: string;
            work?: string;
        };
        email?: string;
        address: string;
    };
    documents?: {
        type: string;
        series?: string;
        number: string;
        issueDate: string;
        issuedBy: string;
        code?: string;
        snils?: string;
        inn?: string;
        omsNumber?: string;
        dmsNumber?: string;
    };
    career?: {
        tabNumber: string;
        position: string;
        department: string;
        organization: string;
        subdivision: string;
        employmentDate: string;
    };
    appeals?: {
        id: string;
        medcardNumber: string;
        type: string;
        employee: string;
        location: string;
        date: string;
        status: 'Завершено' | 'В работе' | 'Отменено';
        result: string;
        creator: string;
    }[];
}
export interface Tab {
    id: string;
    name: string;
    count: number;
  }
  export const employeeTabs: Tab[] = [
    { id: 'appeals', name: 'Обращения', count: 5 },
    { id: 'sick-leaves', name: 'Больничные листы', count: 4 },
    { id: 'conclusions', name: 'Заключения', count: 3 },
    { id: 'referrals', name: 'Направления', count: 3 },
    { id: 'occupational-diseases', name: 'Профзаболевания', count: 1 },
    { id: 'disability', name: 'Инвалидность', count: 1 },
    { id: 'calendar', name: 'Календарный план', count: 3 },
    { id: 'surveys', name: 'Анкеты', count: 2 },
    { id: 'general', name: 'Общие показатели', count: 2 }
  ];

export const employees: Employee[] = [
    {
        id: 1,
        fullName: 'Константинопольский Константин Константинович',
        personalInfo: {
            firstName: 'Константин',
            lastName: 'Константинопольский',
            middleName: 'Константинович',
            birthDate: '11.06.1989',
            age: 35,
            gender: 'мужской',
            birthPlace: 'г. Нижний Тагил',
            citizenship: 'РФ',
            phone: {
                mobile: '+7 900 000-00-00',
                work: '+7 999 999-00-00'
            },
            email: 'konstantin@mail.ru',
            address: 'г. Нижний Тагил, ул. Уральская, д.12, кв. 62'
        },
        documents: {
            type: 'паспорт гражданина РФ',
            series: '0000',
            number: '000000',
            issueDate: '01.01.2020',
            issuedBy: 'МВД РФ ПО СПБ И ЛО',
            code: '000-000-000 00',
            snils: '000-000-000 00',
            inn: '00 00 000000 00',
            omsNumber: '0000000000000000',
            dmsNumber: '0000000000000000'
        },
        career: {
            tabNumber: '0000-000000',
            position: 'машинист тепловоза',
            department: 'ПТЛО',
            organization: 'ООО «Ромашка»',
            subdivision: 'Цех ремонта и эксплуатации локомотивов',
            employmentDate: '20.07.2014'
        },
        appeals: [
            {
                id: '000-000',
                medcardNumber: 'АА 000 000',
                type: 'Амбулаторный прием',
                employee: 'Машинист тепловоза',
                location: 'Здравпункт № 15',
                date: '20.06.2025 12:44',
                status: 'Завершено',
                result: 'Восстановление трудоспособности',
                creator: 'Белова Е.Б.'
            },
            {
                id: '000-000',
                medcardNumber: 'АА 000 000',
                type: 'Оказание СМП',
                employee: 'Машинист тепловоза',
                location: 'Здравпункт № 15',
                date: '20.06.2025 12:44',
                status: 'В работе',
                result: '—',
                creator: 'Белова Е.Б.'
            },
            {
                id: '000-000',
                medcardNumber: 'АА 000 000',
                type: 'Предсменный осмотр',
                employee: 'Машинист тепловоза',
                location: 'Здравпункт № 15',
                date: '20.06.2025 12:44',
                status: 'В работе',
                result: '—',
                creator: 'Белова Е.Б.'
            },
            {
                id: '000-000',
                medcardNumber: 'АА 000 000',
                type: 'Вакцинация',
                employee: 'Машинист тепловоза',
                location: 'Здравпункт № 15',
                date: '20.06.2025 12:44',
                status: 'В работе',
                result: '—',
                creator: 'Белова Е.Б.'
            },
            {
                id: '000-000',
                medcardNumber: 'АА 000 000',
                type: 'Послесменный осмотр',
                employee: 'Машинист тепловоза',
                location: 'Здравпункт № 15',
                date: '20.06.2025 12:44',
                status: 'В работе',
                result: '—',
                creator: 'Белова Е.Б.'
            }
        ]
    }
]