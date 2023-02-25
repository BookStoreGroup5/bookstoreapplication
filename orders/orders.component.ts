import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  author:string='';
  category:string='';
  language:string='';
  price:string='';
  discount:string='';
  imageName:string='';
  description:string='';
  publishDate:string='';

  constructor() {
    this.bookId=localStorage.getItem("bookId")||'';
    this.title=localStorage.getItem("title") ||'';
    this.category=localStorage.getItem("category") ||'';
    this.author=localStorage.getItem("author") ||'';
    this.price=localStorage.getItem("price") ||'';
    this.discount=localStorage.getItem("discount") ||'';
    this.language= localStorage.getItem("language")||'';
    this.imageName=localStorage.getItem("imageName")||'';
    this.description=localStorage.getItem("description")||'';
    this.publishDate=localStorage.getItem("publishDate")||'';
   }

   goForBuy(book:string)
  {
    let bookId = parseInt(book);
    console.log(" code to buy "+bookId+" book");

  }



}
