import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  usermail="none";
  myemail;
  constructor() { }

  ngOnInit() {
  }

  getemail(){
this.usermail=this.myemail
  }
}
