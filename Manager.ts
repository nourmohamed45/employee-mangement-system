import { Employee } from "./Employee";


// Manager class
export class Manager extends Employee {
    // ================== Properties ==================
    protected team: Employee[] = [];

    // ================== Constructor ==================
    constructor(
        name: string,
        age: number,
        position: string,
        salary?: number,
    ) {
        super(name, age, position, salary);
    }

    // ================== Methods ==================
    // calculate manager bonus
    public calculateBonus(): number {
        if (this.salary === undefined) {
            return 0;
        }
        return this.salary * 0.2;
    }

    // add team member
    public addTeamMember(member: Employee): void {
        this.team.push(member);
    }
}