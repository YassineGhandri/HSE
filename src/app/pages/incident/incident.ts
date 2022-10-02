import { Employee } from "../employee/employee";
import { IncidentComponent } from "./incident.component";

export interface Incident {  
   
    reference:string;
    date:Date;
    department:string;
    description:string;
    reported_by:string;
    injury:boolean;
    totalInjuries:number;
    injuredEmployee:string[];
    containmentLoss:boolean;
    quantityLoss:number;
    contaminatedEnvironment:string;
    materialLoss:boolean;
    damagedEquipment:string;
    estimatedLoss:number;
    actionPlan:String;
}


   
    
    
    
    
    