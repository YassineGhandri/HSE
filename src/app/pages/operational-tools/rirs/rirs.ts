import { Employee } from "../../employee/employee";

export interface RIRS {
    Date:Date;
    initiator:Employee;
    site:string;
    priority:string;
    description:string;
    document:File;
}
