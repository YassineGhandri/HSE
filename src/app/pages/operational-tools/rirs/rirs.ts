import { Employee } from "../../employee/employee";

export interface RIRS {
    reference:string;
    status:string;
    Date:Date;    
    initiator:string;
    site:string;
    priority:string;
    description:string;
    document:File;
}
