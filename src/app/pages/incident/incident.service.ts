import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from './incident';
@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http:HttpClient) { }

  postIncident(data:any){
    return this.http.post<any>('http://localhost:3000/incident/',data);
  }
  putIncident(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/incident/'+id,data)
  }
  getIncident():Observable<Incident[]>{
    return this.http.get<Incident[]>('http://localhost:3000/incident');
  }
  deleteIncident(id:number){
    return this.http.delete<any>('http://localhost:3000/incident/'+id)
  }

  getIncidentById(id:string){
   
    return this.http.get<Incident>('http://localhost:3000/incident/'+id);
  }

  
}
