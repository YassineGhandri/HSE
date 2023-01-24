import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transformMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Incident } from './incident';
@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  isShow=true;
  constructor(private http:HttpClient,
    private router: Router) { }

  postIncident(data:any){
    return this.http.post<any>('http://localhost:7000/incident/',data);
  }
  putIncident(data:any, id:number){
    return this.http.put<any>('http://localhost:7000/incident/'+id,data)
  }
  getIncident():Observable<Incident[]>{
    return this.http.get<Incident[]>('http://localhost:7000/incident');
  }
  deleteIncident(id:number){
    return this.http.delete<any>('http://localhost:7000/incident/'+id)
  }

  getIncidentById(id:string){
   
    return this.http.get<Incident>('http://localhost:7000/incident/'+id);
  }

  incidentValid(){
    this.isShow=false;
    this.router.navigate(['/pages/incidents']);
  }
}
