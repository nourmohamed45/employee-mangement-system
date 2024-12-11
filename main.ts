import { Employee } from "./Employee";
import { Manager } from "./Manager";
import { Department } from "./Department";

// Create departments
const itDepartment = new Department("IT");
const hrDepartment = new Department("HR");

// Create a manager
const techManager = new Manager("John Doe", 35, 80000);
itDepartment.addEmployee(techManager);

// Create employees
const employee1 = new Employee("Alice Smith", 28, "Software Developer", 60000);
const employee2 = new Employee("Bob Johnson", 32, "System Admin", 55000);
const employee3 = new Employee("Carol Williams", 30, "HR Specialist", 50000);

// Add employees to departments
itDepartment.addEmployee(employee1);
itDepartment.addEmployee(employee2);
hrDepartment.addEmployee(employee3);

// Add team members to manager
techManager.addTeamMember(employee1);
techManager.addTeamMember(employee2);

// Example usage
console.log("\n--- Department Information ---");
console.log(`IT Department Employees: ${itDepartment.getEmployeeCount()}`);
console.log(`HR Department Employees: ${hrDepartment.getEmployeeCount()}`);

console.log("\n--- Manager Information ---");
console.log("Tech Manager Details:", techManager.getEmployeeDetails(true));
console.log(`Tech Manager's Team Size: ${techManager.getTeamSize()}`);
console.log(`Tech Manager's Bonus: $${techManager.calculateBonus()}`);

console.log("\n--- Employee Information ---");
console.log("Employee Details:", employee1.getEmployeeDetails(false));
console.log(`Employee Bonus: $${employee1.calculateBonus()}`);

console.log("\n--- Total Company Statistics ---");
console.log(`Total Employees: ${Employee.getEmployeeCount()}`);
console.log(
  `Total Employees in IT: ${Department.getTotalEmployeesInDepartment("HR")}`
);
