import { Employee } from "../employee/employee";

export interface OperationTools {
    type:string;
    code:string;
    initiator:Employee;
    participants:Employee[];    
    description:string;
    status:string;
    aproval:Employee;
}
