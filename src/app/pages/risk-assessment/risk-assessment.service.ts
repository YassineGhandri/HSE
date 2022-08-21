import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiskAssessment } from './risk-assessment';

@Injectable({
  providedIn: 'root'
})
export class RiskAssessmentService {

  constructor(private http:HttpClient) { }

  postRiskAssessment(data:any){
    return this.http.post<any>('http://localhost:3000/risk_assessment/',data);
  }
  getRiskAssessment():Observable<RiskAssessment[]>{
    return this.http.get<RiskAssessment[]>('http://localhost:3000/risk_assessment');
  }
  putRiskAssessment(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/risk_assessment/'+id,data)
  }
  deleteRiskAssessment(id:number){
    return this.http.delete<any>('http://localhost:3000/risk_assessment/'+id)
  }
}
