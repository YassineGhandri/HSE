import { Employee } from "../employee/employee";
import { CorrectiveAction } from "../corrective-actions/corrective-action";

export interface ActionPlan {
    source:string;
    sourceRef:string,   
    reference:string;
    responsible:Employee;
    corrective_actions:CorrectiveAction[];     
}
