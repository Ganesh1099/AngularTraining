import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//httpclient 


export interface EmployeeRecords {
  
  "Name":string,
  "Id":Number,
  "Role":String

}
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
//dependancy injection
  constructor(private httpsrv : HttpClient) { }
data:EmployeeRecords[] = []
  
    loadData() {
      let link:string="http://localhost:4200/assets/Employee.json";
      this.httpsrv.get(link).subscribe((Response)=>{
      console.log(Response)
       this.data.push(<EmployeeRecords> Response)
      }
    )
    return this.data;
  }
}
