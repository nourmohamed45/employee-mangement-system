import { Employee } from "./Employee";

// Department class

export class Department {
    // ================== Properties ==================
    protected name: string;
    employees: Employee[] | undefined = [];
    
    // ================== Constructor ==================
    constructor(name: string, employees?: Employee[] | undefined) {
        this.name = name;
        this.employees = employees;
    }

    // ================== Methods ==================
    // Add employee
    addEmployee(employee: Employee) {
        if (this.employees === null || this.employees === undefined) {
            this.employees = [];
        }
        this.employees.push(employee);
    }

    // View employees
    viewEmployees() {
        return this.employees;
    }

    // Get total employees in department
    getTotalEmployeesInDepartment() {
        if (this.employees === null || this.employees === undefined) {
            return 0;
        }
        return this.employees.length;
    }
}