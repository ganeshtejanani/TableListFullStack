import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../../Service/employeeservice.service';
import { error } from 'console';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {MatTableModule} from '@angular/material/table';
import { Employee } from '../../Model/employee.model';
import { MatSortModule, Sort } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,HeaderComponent,SidenavComponent,MatTableModule,MatSortModule,NgxPaginationModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  constructor(private service:EmployeeserviceService){}
  currentpage:number=1
  displayedColumns: string[] = ['EmployeeId','FirstName', 'LastName', 'Email', 'Address'];
  dataSource:Employee[]= [];
  sortValueStore:Sort={active:'EmployeeId',direction:"asc"}
  ngOnInit(): void {
    
    this.service.getAllEmployeesData("EmployeeId","A",0,10).subscribe((result)=>
    {
      this.dataSource=result;
    },error=>
    {
      console.log(error);
    })
  }
  announceSortChange(sortState: Sort) {
    console.log(sortState)
    this.sortValueStore=sortState;
    console.log(this.currentpage);
    this.service.getAllEmployeesData(sortState.direction===""?"EmployeeId":sortState.active,sortState.direction==="asc"?"A":sortState.direction==="desc"?"D":"A",(this.currentpage*10)-10,10).subscribe((result)=>
    {
      this.dataSource=result;
    },error=>
    {
      console.log(error);
    })
  }
  pageChange(events:number):void
  {
    this.currentpage=events;
    
    this.service.getAllEmployeesData(this.sortValueStore.direction===""?"EmployeeId":this.sortValueStore.active,this.sortValueStore.direction==="asc"?"A":this.sortValueStore.direction==="desc"?"D":"A",(events*10)-10,10).subscribe((result)=>
    {
      this.dataSource=result;
    },error=>
    {
      console.log(error);
    })
  }
}

