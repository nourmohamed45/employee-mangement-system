"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
class Manager extends Employee_1.Employee {
    constructor(id, firstName, lastName, email, salary, hireDate, department) {
        super(id, firstName, lastName, email, salary, hireDate);
        this.department = department;
        this.subordinates = [];
    }
    getDepartment() {
        return this.department;
    }
    addSubordinate(employee) {
        this.subordinates.push(employee);
    }
    removeSubordinate(employeeId) {
        this.subordinates = this.subordinates.filter(emp => emp.getId() !== employeeId);
    }
    getSubordinates() {
        return [...this.subordinates];
    }
    toString() {
        return `Manager: ${this.getFullName()} (ID: ${this.getId()}) - Department: ${this.department}`;
    }
}
exports.Manager = Manager;
