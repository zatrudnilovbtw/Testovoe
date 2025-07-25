import Image from "next/image";
import EmployeeHero from "@/components/employees/EmployeeHero/EmployeeHero";
export default function Home() {
  return (
    <div className="employee-page">
      {/* Hero секция с информацией о сотруднике */}
      <EmployeeHero/>
      
      {/* Footer секция с табами и таблицей
      <EmployeeFooter employeeId={employee.id} /> */}
    </div>
  );
}
