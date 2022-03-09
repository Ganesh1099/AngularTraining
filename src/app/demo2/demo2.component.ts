import { Component, OnInit } from '@angular/core';
import { Demo2serviceService } from '../demo2service.service';
import { repos } from '../../assets/repos';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  constructor(private  demo:Demo2serviceService) { }
data:repos[] = []
  ngOnInit(): void {
    console.log("ngonit called")
    this.intiate()
  }
  ngOnChanges(){
    console.log("ngonchange called ")
  }
  ngDoCheck()	
{
  console.log("ngdocheck called ")
}
ngAfterContentInit()	
{
  console.log("ngafter called ") 
}
msg:String = "";
method(){
return this.msg = "button called";
}
  public intiate() {
    return this.demo.fetchData().subscribe(
      (response) =>{
      this.data = response;
  }
)
  }
}
