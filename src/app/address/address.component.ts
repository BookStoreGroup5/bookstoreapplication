import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  userAddress:string='';
  userName:string='';
  constructor(private activatedRouter:ActivatedRoute,private router:Router)
  {
    this.userAddress=localStorage.getItem("userAddress")||'';
    this.userName=localStorage.getItem("userName")||'';
    
   /* this.title=localStorage.getItem("title") ||'';

    this.price=localStorage.getItem("price") ||'';
    this.discount=localStorage.getItem("discount") ||'';
    */
  }
  placeOrder(name:string,address:string){
    this.router.navigate(['thankspage']);
  }
}
