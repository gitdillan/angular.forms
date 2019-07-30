import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service'
  import { from } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private inst:SampleService) { }

  ngOnInit() {
    console.log(this.inst.cartTotal)
 
  }

}
