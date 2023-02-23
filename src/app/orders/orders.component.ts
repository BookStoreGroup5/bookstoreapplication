import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  category:string='';
  title:string='';
  
  

  constructor() {
    this.category=localStorage.getItem("category") ||'';
    this.title=localStorage.getItem("title") ||'';
    
  }
}
