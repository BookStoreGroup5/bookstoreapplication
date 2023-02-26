import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from '../order-dto';
import { OrderOperationsService } from '../order-operations.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  bookId:string='';
  title:string='';
 
  price:string='';
  discount:string='';
  totalAmount:string='';
  

  constructor(private activatedRouter:ActivatedRoute,private router:Router) {
    this.bookId=localStorage.getItem("bookId")||'';
    this.title=localStorage.getItem("title") ||'';

    this.price=localStorage.getItem("price") ||'';
    this.discount=localStorage.getItem("discount") ||'';
    this.totalAmount=localStorage.getItem("totalAmount")||'';
   }

   goForBuy(book:string)
  {
    let bookId = parseInt(book);
    console.log(" code to buy "+bookId+" book");
    this.router.navigate(['address']);
  }
  addreview(){
    this.router.navigate(['addReview']);
  }
}
