import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CasesBarChartModel {
  label: string;
  y: number;
}

export interface CasesPieChartModel {
  name: string;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  cases_url : string = "http://localhost:5000/most_cases/all";
  getCasesBarChartData(): Observable<CasesBarChartModel[]>{
    return this.http.get<CasesBarChartModel[]>(this.cases_url);
  }

  cases_pie_url : string = "http://localhost:5000/most_cases_pie/all";
  getCasesPieChartData(): Observable<CasesPieChartModel[]>{
    return this.http.get<CasesPieChartModel[]>(this.cases_pie_url);
  }
}
