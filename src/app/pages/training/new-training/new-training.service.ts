import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newTraining } from './new-training';

@Injectable({
  providedIn: 'root'
})
export class NewTrainingService {

  constructor(private http:HttpClient) { }

  postTraining(data:any){
    return this.http.post<any>('http://localhost:3000/trainings/',data);
  }
  getTraining(){
    return this.http.get<any>('http://localhost:3000/trainings');
  }
  putTraining(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/trainings/'+id,data)
  }
  deleteTraining(id:number){
    return this.http.delete<any>('http://localhost:3000/trainings/'+id)
  }
  getTrainingById(id:string){
    return this.http.get<newTraining>('http://localhost:3000/trainings/'+id);
  }
}
