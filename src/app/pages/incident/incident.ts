import { Employee } from "../employee/employee";

export interface Incident {
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

    
   
    
    
    
    
    