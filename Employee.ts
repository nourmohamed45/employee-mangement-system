
// Employee class
export class Employee {
    // ================== properties ==================
    protected name: string;
    protected age: number;
    protected position: string;
    protected salary: number | undefined;
    private static employeeCount: number = 0;

    // ================== constructor ==================
    constructor(name: string, age: number, position: string, salary?: number | undefined) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
        Employee.employeeCount++; // Increment count on new employee
    }

    // ================== methods ==================

    // get employee details
    public getEmployeeDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Position: ${this.position}, Salary: ${this.salary}`
    }

    // set employee salary
    public setSalary(salary: number) {
        this.salary = salary
    }

    // calculate employee bonus
    public calculateBonus() {
        if (this.salary === undefined) {
            return 0;
        }
        return this.salary * 0.1
    }

    // get employee count
    static getEmployeeCount() {
        return Employee.employeeCount;
    }
}