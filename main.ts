import { Employee } from './Employee';
import { Manager } from './Manager';
import { Department } from './Department';

const ahmedEmployee = new Employee("Ahmed", 25, "Software Engineer", 50000);
const mohamedEmployee = new Employee("Mohamed", 30, "Project Manager", 80000);
const nourManager = new Manager("Ahmed", 40, "Manager");

const itDepartment = new Department("IT");


// Employee Implementation 

console.log(`Employees Count: ${Employee.getEmployeeCount()}`);

console.log(ahmedEmployee.getEmployeeDetails());
console.log(mohamedEmployee.calculateBonus());


// Manager Implementation

nourManager.setSalary(10000);

console.log(`The bonus for the manager is: ${nourManager.calculateBonus()}`);

nourManager.addTeamMember(ahmedEmployee);


// Department Implementation

itDepartment.addEmployee(ahmedEmployee);
itDepartment.addEmployee(mohamedEmployee);

console.log(itDepartment.viewEmployees());

console.log(`Number of employees in IT: ${itDepartment.getTotalEmployeesInDepartment()}`);
