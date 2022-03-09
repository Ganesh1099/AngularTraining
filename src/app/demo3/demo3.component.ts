import { Component, OnInit } from '@angular/core';
import { Demo3Service } from '../demo3.service'
import { crpto } from '../../assets/crpto';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  constructor(private  demo:Demo3Service) { }
  data:Crypto[] = []
  ngOnInit(): void {
    this.intiate()
  }
  public intiate() {
    return this.demo.readData().subscribe(
      (response) =>{
      this.data = response;
  }
)
  }
}
