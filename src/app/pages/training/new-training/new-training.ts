import { Department } from "../../department/department";

export interface newTraining {
    reference:string;
    title:string;
    validity:number;
    necessity: string;
    department:Department;
}



