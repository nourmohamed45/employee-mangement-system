"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
class Department {
    constructor(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.employees = [];
        this.manager = null;
    }
    setManager(manager) {
        this.manager = manager;
    }
    getManager() {
        return this.manager;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    removeEmployee(employeeId) {
        this.employees = this.employees.filter(emp => emp.getId() !== employeeId);
    }
    getEmployees() {
        return [...this.employees];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location;
    }
    getEmployeeCount() {
        return this.employees.length;
    }
    toString() {
        return `Department: ${this.name} (ID: ${this.id}) - Location: ${this.location}`;
    }
}
exports.Department = Department;
