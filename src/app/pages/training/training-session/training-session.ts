import { Employee } from "../../employee/employee";

export interface TrainingSession {
      reference:string;
      subject: string;
      date: Date,
      participants: Employee[];
      center: string,      
}
