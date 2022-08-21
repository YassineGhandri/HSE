import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionPlanService {

  constructor(private http:HttpClient) { }

  postAP(data:any){
    return this.http.post<any>('http://localhost:3000/action_plan/',data);
  }
  getAP(){
    return this.http.get<any>('http://localhost:3000/action_plan');
  }
  putAP(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/action_plan/'+id,data)
  }
  deleteAP(id:number){
    return this.http.delete<any>('http://localhost:3000/action_plan/'+id)
  }
}
