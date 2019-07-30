import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {
  nametable={name:'Raman', job:'farmer', hobby:'fishing'}
  nametable1={name:'Babu', job:'designer', hobby:'drawing'}
  nametable2
  display=[this.nametable, this.nametable1]
  myName=""
  myJob=""
  myHobby=""
  showlocalstorage=""
  constructor() { }

  ngOnInit() {
  }

  addValue(){

if(this.myName!="" && this.myJob!="" && this.myHobby!="")
{
  this.nametable2={name:this.myName, job:this.myJob, hobby:this.myHobby}
  this.display.push(this.nametable2)
}

  }

  setValue(){
localStorage.setItem("place","Kakkanad")
  }

  getValue(){
    this.showlocalstorage=localStorage.getItem("place")
  }

}
