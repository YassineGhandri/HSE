import { Employee } from "../employee/employee";


export interface PermitWork {
    reference:String;
    type:string;
    object:String;
    initiator:string;    
    startDate:Date;    
    risks:string;
    executors:string[];
    status:string;
}
