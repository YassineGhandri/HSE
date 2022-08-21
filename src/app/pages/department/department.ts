import { Employee } from "../employee/employee";

export interface Department {
    code:String;
    name:String;
    total_employee:number;
    employees:Employee[];
}