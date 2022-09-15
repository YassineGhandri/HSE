import { Employee } from "../employee/employee";
import { IncidentComponent } from "./incident.component";

export interface Incident {
    id:number;
    reference:string;
    date:Date;
    zone:String;
    description:String;
    reportor_by:Employee;
    injury:boolean;
    injuredEmployee:Employee[];
    containmentLoss:boolean;
    quantityLoss:number;
    contaminatedEnvironment:String;
    materialLoss:Boolean;
    damagedEquipment:String;//it should be converted to list
    estimatedLoss:number;
    actionPlan:String;
}


   
    
    
    
    
    