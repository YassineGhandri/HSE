import { Employee } from "../employee/employee";

export interface Department {
    code:string;
    name:string;
    departmentHead:Employee;
    secondResponsible:Employee;
    total_employee:number;
    employees:Employee[];
}