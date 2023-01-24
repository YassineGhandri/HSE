import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingSession } from './training-session';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor(private http:HttpClient) { }

  postTrainingSession(data:any){
    return this.http.post<any>('http://localhost:7000/trainingSessions/',data);
  }
  getTrainingSession(){
    return this.http.get<any>('http://localhost:7000/trainingSessions');
  }
  putTrainingSession(data:any, id:number){
    return this.http.put<any>('http://localhost:7000/trainingSessions/'+id,data)
  }
  deleteTrainingSession(id:number){
    return this.http.delete<any>('http://localhost:7000/trainingSessions/'+id)
  }
  getTrainingSessionById(id:string){
    return this.http.get<TrainingSession>('http://localhost:7000/trainingSessions/'+id);
  }
}
