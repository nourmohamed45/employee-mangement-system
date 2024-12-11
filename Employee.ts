export class Employee {
    protected _id: number;
    protected _name: string;
    protected _age: number;
    protected _position: string;
    protected _salary: number;
    private static employeeCount: number = 0;

    constructor(name: string, age: number, position: string, salary: number) {
        this._id = ++Employee.employeeCount;
        this._name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    // Getters
    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    // Encapsulation: salary is protected and only accessible through methods
    public getSalary() {
        return this._salary;
    }

    public setSalary(salary: number): void {
        if(salary > 0) {
            this._salary = salary;
        } else {
            throw new Error("Salary must be a positive number.");
        }
    }

    // Method to calculate bonus (will be overridden in Manager class)
    public calculateBonus(): number {
        return this._salary * 0.1;
    }

    // Get employee details with method overloading
    public getEmployeeDetails(includePrivate?: boolean): any  {
        const details = {
            id: this._id,
            name: this._name,
            age: this._age,
            position: this._position,
        };
        
        
        if(includePrivate) {
            return {
                ...details,
                salary: this._salary
            }
        }
        return details;
    }

    // Static method to get total employee count
    public static getEmployeeCount(): number {
        return Employee.employeeCount;
    }
}