import { Component } from '@angular/core';
import { BookOperationsService } from '../book-operations.service';
import { Book } from '../book';
import { BookDetailedDTO } from '../book-detailed-dto';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent {

  __bookService:BookOperationsService


  allBooks:Array<BookDetailedDTO> =[];
  books:Array<Book> =[];
  wishList:Array<BookDetailedDTO> =[];
  wishListCount: number=0;



  priceLowCss:string = "color:red;font-weight: 700;";
  priceNormalCSS:string = "color:green";
  constructor(bookService:BookOperationsService)
  {
    this.__bookService=bookService;
    this.books=this.__bookService.getBooksByDiscount();
  }


  goForBuy(book:string)
 {
  let bookId =parseInt(book);
  console.log("code to buy "+bookId+" book");
 }
 addWishlist(book:string)
 {
  let addBookId = parseInt(book);

  this.allBooks.forEach(b=>{
    if(b.bookId == addBookId)
    {
      this.wishList.push(b);
    }
  });
  this.wishListCount =this.wishList.length;
  console.log(this.wishList);

 }

}
