import { Employee } from "../../employee/employee";

export interface StopCard {
    Date:Date;
    site:string;
    initiator:Employee;
    observed_risks:string;
    document:File; //the file will be the stop card//
}
