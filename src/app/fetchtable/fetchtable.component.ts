import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchtable',
  templateUrl: './fetchtable.component.html',
  styleUrls: ['./fetchtable.component.css']
})
export class FetchtableComponent implements OnInit {
  nametable={name:'deepu', job:'sleeping', hobby:'eating'}
  nametable2={name:'dileep', job:'front end developer', hobby:'lazyness'}
  nametable3={name:'Ajith', job:'php developer', hobby:'sleeping'}
  nametable4;
  display=[this.nametable,this.nametable2,this.nametable3]
  myName;
  myJob;
  myHobby;
  constructor() { }

  ngOnInit() {
  }

  addValue(){
    
    this.nametable4={name:this.myName, job:this.myJob, hobby:this.myHobby}
    this.display.push(this.nametable4)
      }

}
