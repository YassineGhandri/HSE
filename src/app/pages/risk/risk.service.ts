import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RiskService {

  constructor(private http: HttpClient) { }

  postRisk(data: any) {
    return this.http.post<any>('http://localhost:3000/risks/', data);
  }
  getRisk() {
    return this.http.get<any>('http://localhost:3000/risks');
  }
  putRisk(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/risks/' + id, data)
  }
  deleteRisk(id: number) {
    return this.http.delete<any>('http://localhost:3000/risks/' + id)
  }

}
