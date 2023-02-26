import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';
import { BookReviewDTO } from '../book-review-dto';
import { BookReviewService } from '../book-review.service';
import { BookDetailedDTO } from '../bookDetailed-dto';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent {

  __bookService:BookOperationsService
 

  allReviews:Array<BookReviewDTO>=[];
  allBooks:Array<BookDetailedDTO> =[];
  wishList:Array<BookDetailedDTO> =[];
  wishListCount: number=0;
  
  
 
  
  priceLowCss:string = "color:red;font-weight: 700;";
  priceNormalCSS:string = "color:green";
  constructor(bookService:BookOperationsService,private activatedRouter:ActivatedRoute,private router:Router)
  {
    this.__bookService=bookService;
   
    this.__bookService.getBooksByDiscount().subscribe(
      data=>{
        console.log("data:-"+data);
        this.allBooks=data;
      },err=>{
        console.log("error from spring",err);
      }
    )
  }

  

  quickView(title:string){
    this.__bookService.bookByTitle(title).subscribe(
      data=>{
        console.log("data:-"+data);
        this.allBooks=data;
      },err=>{
        console.log("error from spring",err);
      }
    )
    this.router.navigate(['books']);
  }

  

}
