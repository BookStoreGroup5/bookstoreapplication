import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';
import { BookReviewService } from '../book-review.service';
import { BookDetailedDTO } from '../bookDetailed-dto';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  __bookService:BookOperationsService
 

  allBooks:Array<BookDetailedDTO> =[];
  wishList:Array<BookDetailedDTO> =[];
  wishListCount: number=0;
  
  
  
  priceLowCss:string = "color:red;font-weight: 700;";
  priceNormalCSS:string = "color:green";
  constructor(bookService:BookOperationsService,private activatedRouter:ActivatedRoute,private router:Router)
  {
    this.__bookService=bookService;
    this.__bookService.getAllBooks().subscribe(
      data=>{
        console.log("dataa:-"+data);
        this.allBooks=data;
      },
      err=>{
        console.log("error from spring",err);
      }
    )
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
 veiwAllBooksByCategory(category:string){
  this.__bookService.getBookByCategory(category).subscribe(
    data=>{
      console.log("data:-"+data);
      this.allBooks=data;
    },err=>{
      console.log("error from spring",err);
    }
  )
 }
 veiwBooksByLanguage(language:string)
 {
  this.__bookService.getBooksByLanguage(language).subscribe(
    data=>{
      console.log("data:-"+data);
      this.allBooks=data;
    },err=>{
      console.log("error from spring",err);
    }
  )
 }
 
addreview(){
  this.router.navigate(['addReview']);
}
 }


