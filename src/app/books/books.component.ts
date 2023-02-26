import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';
import { BookReviewDTO } from '../book-review-dto';
import { BookReviewService } from '../book-review.service';
import { BookDetailedDTO } from '../bookDetailed-dto';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  __bookService:BookOperationsService
  __reviewService:BookReviewService
 
  allReviews:Array<BookReviewDTO>=[];
  allBooks:Array<BookDetailedDTO> =[];
  wishList:Array<BookDetailedDTO> =[];
  wishListCount: number=0;
  
  a=0;
  reviewForBook=0;
  showReview:boolean=false;
  
  priceLowCss:string = "color:red;font-weight: 700;";
  priceNormalCSS:string = "color:green";
  constructor(bookService:BookOperationsService,reviewService:BookReviewService,private activatedRouter:ActivatedRoute,private router:Router)
  {
    this.__bookService=bookService;
    this.__reviewService=reviewService;
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



  goForBuy(bookId:number,title:string,price:number,discount:number)
 {
  localStorage.removeItem('bookId')
    localStorage.removeItem('title')
    localStorage.removeItem('price')
    localStorage.removeItem('discount')
    localStorage.removeItem('totalAmount')
    
    let totalAmount=((price)-((discount/100)*price));

    localStorage.setItem("bookId",bookId+'');
    localStorage.setItem("title",title);
    localStorage.setItem("price",price+'');
    localStorage.setItem("discount",discount+'');
    localStorage.setItem("totalAmount",totalAmount+'');

    this.router.navigate(['orders']);
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
avgReview(bookId:number){
  this.__reviewService.getAvgReview(bookId).subscribe(
    data=>{
      console.log("data:-"+data);
      let avg=data;
    },err=>{
      console.log("error from spring",err);
    }
  )
}
getReviews(bookId:number)
{
  
  this.__reviewService.getReviewByBookId(bookId).subscribe(
    data=>{
      console.log("data:-"+data)
      this.allReviews=data;
      this.showReview=true;
      let sum=0;
      for(var j=0;j<this.allReviews.length;j++){
        sum+=this.allReviews[j].rating;
      }

      this.a=sum/this.allReviews.length;

      console.log(this.allReviews);
      console.log(this.a);
    },err=>{
      console.log("error from spring",err);
    }
  )
  let sum=0;
  for(var j=0;j<this.allReviews.length;j++){
    sum+=this.allReviews[j].rating;
  }
  this.a=sum/this.allReviews.length;
  
}

}
