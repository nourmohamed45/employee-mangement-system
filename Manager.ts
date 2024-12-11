import { Employee } from "./Employee";

export class Manager extends Employee {
    private _team: Employee[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name,age, "Manager", salary);
    }

    // Override the base class method to Calculate bonus for the manager
    public override calculateBonus(): number {
        return this._salary * 0.2;
    }

    // Method to add a team member to the manager's team
    public addTeamMember(employee: Employee): void {
        if(employee instanceof Manager) {
            throw new Error("Cannot add a manager as a team member.");
        }
        if(this._team.includes(employee)) {
            throw new Error("Team member already exists.");
        }

        this._team.push(employee);
    }


    // Method to remove the team member from the manager's team
    public removeTeamMember(employeeId: number): void {
        this._team = this._team.filter((employee) => employee.getId() !== employeeId)
    }

    // Method to get the team members of the manager
    public getTeamMembers(): Employee[] {
        return [...this._team];
    }

    // Method to get the manager's team size
    public getTeamSize(): number {
        return this._team.length;
    }


    // Override the base class Method getEmployeeDetails to include team details
    public override getEmployeeDetails(includePrivate: boolean = false) : any {
        const baseDetails = super.getEmployeeDetails(includePrivate);

        return {
            ...baseDetails,
            teamSize: this.getTeamSize(),
            teamMembers: this._team.map((emp) => emp.getEmployeeDetails(includePrivate))
        }
    }

}