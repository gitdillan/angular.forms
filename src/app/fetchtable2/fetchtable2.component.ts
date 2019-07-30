import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchtable2',
  templateUrl: './fetchtable2.component.html',
  styleUrls: ['./fetchtable2.component.css']
})
export class Fetchtable2Component implements OnInit {
  nametable={name:'Raman', job:'farmer', hobby:'fishing'}
  nametable2={name:'Babu', job:'designer', hobby:'drawing'}
  nametable3;
  display=[this.nametable,this.nametable2]
  myName="";
  myJob="";
  myHobby="";
  constructor() { }

  ngOnInit() {
  }

  addValue(){
    //alert(this.myName)
  if(this.myName!="" && this.myJob!="" && this.myHobby!="") //if with and
  //if(this.myName!="" || this.myJob!="") // if with or
    {
      this.nametable3={name:this.myName, job:this.myJob, hobby:this.myHobby}
      this.display.push(this.nametable3)
    }
    
    
      }

}
