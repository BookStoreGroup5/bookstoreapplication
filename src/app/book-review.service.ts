import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookReview } from './book-review';
import { BookReviewDTO } from './book-review-dto';

@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  baseURL:string = 'http://localhost:8085';
  submitReviewEndPoint:string=this.baseURL+'/review/addreview';
  ReviewByBookIdEndPoint:string=this.baseURL+'/review';
  AvgReviewEndpoint:string=this.baseURL+'/avgreview/bookId';
  //localhost:9090/app/by/11
  //localhost:8085/review/addreview
  

  constructor(private http:HttpClient) { }
  getReviewByBookId(bookId:number):Observable<BookReviewDTO[]>{
    console.log("inside method 1" +this.ReviewByBookIdEndPoint);
    this.ReviewByBookIdEndPoint= this.ReviewByBookIdEndPoint+'/'+bookId;

    console.log("after getting review 2"+ this.ReviewByBookIdEndPoint);

    return this.http.get<BookReviewDTO[]>(`${this.ReviewByBookIdEndPoint}`);
   }


   getRatingsByBookId(filterReviewbyrating:number):BookReview[]
   {
    return[];

   }
   submitBookReview(bookReview: BookReview):Observable<BookReview> {

    console.log("inside method 1 : Review added" +this.submitReviewEndPoint);
    
    return this.http.post<BookReview>(`${this.submitReviewEndPoint}`,bookReview);
    
  }
  getAvgReview(bookId:number):Observable<number> {
    console.log("inside avg Review" +this.AvgReviewEndpoint);
    this.AvgReviewEndpoint=this.AvgReviewEndpoint+bookId;
    return this.http.get<number>(`${this.AvgReviewEndpoint}`);
  }
}
