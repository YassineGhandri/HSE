import { Employee } from "../employee/employee";

export interface ActionPlan {
    reference:string;
    progress:number;
    responsible:Employee;
    corrective_actions:string;
}
