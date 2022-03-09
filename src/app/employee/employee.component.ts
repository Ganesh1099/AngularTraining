import { Component, OnInit } from '@angular/core';
import { EmployeeDataService, EmployeeRecords } from '../employee-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empsrv:EmployeeDataService) { 
    this.initiate()
  }
  data:EmployeeRecords[] = [  ]
  ngOnInit(): void {
  }
   initiate(){
     this.data = this.empsrv.loadData()
  
   }
}
