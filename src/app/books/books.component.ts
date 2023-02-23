import { Component } from '@angular/core';
import { BookOperationsService } from '../book-operations.service';
import { BookDetailedDTO } from '../book-detailed-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  __bookService:BookOperationsService;
  router:Router;

  allBooks:Array<BookDetailedDTO> =[];
  wishList:Array<BookDetailedDTO> =[];
  wishListCount: number=0;



  priceLowCss:string = "color:red;font-weight: 700;";
  priceNormalCSS:string = "color:green";
  constructor(bookService:BookOperationsService,router:Router)
  {
    this.__bookService=bookService;
    this.router = router;

  }

  veiwAllBooks(){
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

  placeOrder(title:string,description:string,price:number,discount:number)
  {
    localStorage.removeItem('title')
    localStorage.removeItem('description')
    localStorage.removeItem('price')
    localStorage.removeItem('discount')
    
    localStorage.setItem("title",title+'');
    localStorage.setItem("description",description);
    localStorage.setItem("discount",discount+'');
    localStorage.setItem("price",price+'');
   
    this.router.navigate(['order']);

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


}
