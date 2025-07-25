import EmployeeHero from "@/components/employees/EmployeeHero/EmployeeHero";
import EmployeeFooter from "@/components/employees/EmployeeFooter/EmployeeFooter";
export default function Home() {
  return (
    <div className="employee-page">
      <EmployeeHero/>
      <EmployeeFooter/>
    </div>
  );
}
