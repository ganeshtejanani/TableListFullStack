import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  getAllEmployeesData(orderBy:string,orderDirection:string,skipRows:number,topRows:number):Observable<Employee[]>
  {
    return this.http.post<Employee[]>("https://localhost:44351/api/EmployeeDetail/GetEmployeeDetails?OrderBy="+orderBy+"&OrderDirection="+orderDirection+"&SkipRows="+skipRows+"&TopRows="+topRows,{})
  }
}
