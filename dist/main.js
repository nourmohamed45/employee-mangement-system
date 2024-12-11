"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const Manager_1 = require("./Manager");
const Department_1 = require("./Department");
// Create a department
const itDepartment = new Department_1.Department(1, "IT", "Building A");
// Create a manager
const manager = new Manager_1.Manager(1, "John", "Doe", "john.doe@company.com", 120000, new Date("2023-01-01"), "IT");
// Set department manager
itDepartment.setManager(manager);
// Create employees
const employee1 = new Employee_1.Employee(2, "Jane", "Smith", "jane.smith@company.com", 80000, new Date("2023-03-15"));
const employee2 = new Employee_1.Employee(3, "Bob", "Johnson", "bob.johnson@company.com", 75000, new Date("2023-06-01"));
// Add employees to manager's subordinates
manager.addSubordinate(employee1);
manager.addSubordinate(employee2);
// Add employees to department
itDepartment.addEmployee(employee1);
itDepartment.addEmployee(employee2);
// Example usage
console.log(itDepartment.toString());
console.log(manager.toString());
console.log(`Number of employees in IT: ${itDepartment.getEmployeeCount()}`);
console.log("Subordinates of manager:");
manager.getSubordinates().forEach(emp => console.log(emp.toString()));
