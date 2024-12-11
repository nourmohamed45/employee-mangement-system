"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(id, firstName, lastName, email, salary, hireDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getId() {
        return this.id;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getEmail() {
        return this.email;
    }
    getSalary() {
        return this.salary;
    }
    getHireDate() {
        return this.hireDate;
    }
    setSalary(newSalary) {
        this.salary = newSalary;
    }
    toString() {
        return `Employee: ${this.getFullName()} (ID: ${this.id})`;
    }
}
exports.Employee = Employee;
