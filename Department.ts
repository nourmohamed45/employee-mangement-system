import { Employee } from "./Employee";

export class Department {
  private readonly _name: string;
  private _employees: Employee[] = [];
  private static departments: Department[] = [];

  constructor(name: string) {
    this._name = name;
    Department.departments.push(this);
  }

  // Add Employee to department
  public addEmployee(employee: Employee): void {
    if (this._employees.includes(employee)) {
      throw new Error("Employee already exists.");
    }
    this._employees.push(employee);
  }

  // Remove Employee from department
  public removeEmployee(employeeId: number): void {
    this._employees = this._employees.filter(
      (emp) => emp.getId() !== employeeId
    );
  }

  // find a specific employee in the department
  public findEmployee(id: number): Employee | undefined;
  public findEmployee(name: string): Employee | undefined;
  public findEmployee(search: number | string): Employee | undefined {
    if (typeof search === "number") {
      return this._employees.find((emp) => emp.getId() === search);
    } else if (typeof search === "string") {
      return this._employees.find((emp) => emp.getName() === search);
    }
  }
  public getEmployeeCount(): number {
    return this._employees.length;
  }


  // get employees count in the department
  public static getTotalEmployeesInDepartment(departmentName: string): number {
    const department = Department.departments.find(dep => dep._name === departmentName);
    return department ? department.getEmployeeCount() : 0;
  }


//   get all Departments
  public static getAllDepartments(): Department[] {
    return [...Department.departments];
  }
}
