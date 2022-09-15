import { Employee } from "../employee/employee";
import { Risk } from "../risk/risk";

export interface PermitWork {
    reference:String;
    type:string;
    object:String;
    initiator:Employee;    
    startDate:Date;    
    risks:Risk[];
    exucutors:Employee[];
}
