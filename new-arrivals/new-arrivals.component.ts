import { Component } from '@angular/core';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent {

  __bookService:BookOperationsService

  allBooks:Array<Book> =[];
  wishList:Array<Book> =[];
  wishListCount: number=0;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";
  constructor(bookService:BookOperationsService)
  {
    this.__bookService=bookService;
    this.allBooks=this.__bookService.getBookArr();
  }

}
