import { ActionPlan } from "../action-plan/action-plan";
import { Employee } from "../employee/employee";

export interface RIRS {
    reference:string;
    status:string;
    date:Date;    
    initiator:string;
    department:string;
    priority:string;
    description:string;
    action_plan:ActionPlan;
}
