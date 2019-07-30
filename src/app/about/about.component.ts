import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
aboutloop=[
  {"heading":"heading1", "descrition":"Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!", "pagelink":"/cart"},
  {"heading":"heading2", "descrition":"Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!","pagelink":"details/2"},
  {"heading":"heading3", "descrition":"Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on the preview page. The theme is open source, and you can use it for any purpose, personal or commercial.", "pagelink":"details/3"},
  {"heading":"heading1", "descrition":"Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!", "pagelink":"details/1"},
  {"heading":"heading2", "descrition":"Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!","pagelink":"details/2"},
  {"heading":"heading3", "descrition":"Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on the preview page. The theme is open source, and you can use it for any purpose, personal or commercial.", "pagelink":"details/3"}
]

array1 = [0,1,2,3,4]
object1 = {roll_no:10,name:"Ramu",age:19}

myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 }
  constructor() { }

  ngOnInit() {
    console.log(this.object1.age)
    console.log( this.myObj.cars[0].models[0]);
    console.log( this.myObj.cars[1].models[1])
  

  }

}
