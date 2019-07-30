import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  nametable={name:'deepu', job:'sleeping', hobby:'eating'}
  nametable2={name:'dileep', job:'front end developer', hobby:'lazyness'}
  nametable3={name:'Ajith', job:'php developer', hobby:'sleeping'}
  display=[this.nametable,this.nametable2]

  newVar=[{name:'deepu', job:'sleeping', hobby:'eating'},
  {name:'dileep', job:'front end developer', hobby:'lazyness'},
  
]
  constructor() { }

  ngOnInit() {
  }

  addRow(){
this.display.push(this.nametable3)

  }

}
