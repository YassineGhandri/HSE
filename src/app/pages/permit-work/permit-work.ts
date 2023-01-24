import { Employee } from "../employee/employee";


export interface PermitWork {
    source:string;
    reference:String;
    type:string;
    object:String;
    initiator:string;    
    startDate:Date;    
    risks:string;
    executors:string[];
    status:string;
}
