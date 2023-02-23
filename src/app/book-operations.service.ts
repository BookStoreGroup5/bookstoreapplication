import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookDetailedDTO } from './bookDetailed-dto';
import{BookRequest} from './book-request'
@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

  //localhost:8085/book/addbook
   Stock:number =0;
  baseURL='http://localhost:8085';
  addBookEndpoint=this.baseURL+'/book/addbook';
  getAllBooksEndpoint=this.baseURL+'/book/list';

  getBooksByCategoryEndpoint=this.baseURL+'/book/category'
  constructor( private http:HttpClient) { 

  }

  bookArr:Book[]=[];
  bookRequestArr:BookRequest[]=[];
  submitBook(book:Book):Observable<Book>
  {
    console.log("inside service:"+this.addBookEndpoint);
    return this.http.post<Book>(`${this.addBookEndpoint}`,book);
  }
  getAllBooks():Observable<BookDetailedDTO[]>{
    console.log("inside get method 1: Book" +this.getAllBooksEndpoint);
    return this.http.get<BookDetailedDTO[]>(`${this.getAllBooksEndpoint}`);
  }
  getBookByCategory(category:string):Observable<BookDetailedDTO[]>{
    console.log("inside get book by category" +this.getBooksByCategoryEndpoint);
    this.getBooksByCategoryEndpoint=this.getBooksByCategoryEndpoint+'/'+category;
    return this.http.get<BookDetailedDTO[]>(`${this.getBooksByCategoryEndpoint}`);
  }
  



  addBook(bookFromadmin:Book)
  {
    this.bookArr.push(bookFromadmin);
    console.log("Inside Book Service : Book Added ");
    console.log(" Total Books Are:- "+this.bookArr.length);

  }
  getBookArr():Book[]
  {
    return this.bookArr;
  }
  addBookRequest(bookFromUser: BookRequest) {
    this.bookRequestArr.push(bookFromUser);
    console.log("Inside Book Service : Book Requested Added ");
    console.log(" Total Books Are:- "+this.bookRequestArr.length);
}
getBookRequestArr():BookRequest[]
{
  return this.bookRequestArr;
}

getBooksByDiscount():Book[]
{
  let outputArr:Book[] = [];

    this.bookArr.forEach(b=>{
      if(b.discount >20)
      {
        outputArr.push(b);
      }
    });

    return outputArr;
  }
}

