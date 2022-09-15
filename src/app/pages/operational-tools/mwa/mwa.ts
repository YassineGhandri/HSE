import { Employee } from "../../employee/employee";

export interface MWA {
    reference:string;
    Date:Date;
    site:string;
    participatns:Employee[];
    recommendations:string;
    document:File;
    
    
}
