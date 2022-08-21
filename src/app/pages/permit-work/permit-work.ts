import { Employee } from "../employee/employee";
import { PermitWorkType } from "../pw/permit-work-type";
import { Risk } from "../risk/risk";

export interface PermitWork {
    reference:String;
    type:PermitWorkType;
    object:String;
    initiator:Employee;    
    startDate:Date;    
    risks:Risk[];
    exucutors:Employee[];
}
