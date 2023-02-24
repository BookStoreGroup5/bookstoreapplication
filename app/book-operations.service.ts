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

  getBooksByCategoryEndpoint=this.baseURL+'/book/category';
  getBooksByLanguageEndpoint=this.baseURL+'/book/language';
  getBooksByDiscountEndpoint=this.baseURL+'/book/discount';
  getBooksByAuthorNameEndpoint=this.baseURL+'/book/author';
  getBooksByCategoryAndlanguageEndpoint=this.baseURL+'/book/author';
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
  getBooksByLanguage(language:string):Observable<BookDetailedDTO[]>{
    console.log("inside get book by language" +this.getBooksByLanguageEndpoint);
    this.getBooksByLanguageEndpoint=this.getBooksByLanguageEndpoint+'/'+language;
    return this.http.get<BookDetailedDTO[]>(`${this.getBooksByLanguageEndpoint}`);
  }
  getBooksByDiscount():Observable<BookDetailedDTO[]>{
    console.log("inside get book by discount"+this.getBooksByDiscountEndpoint);
    return this.http.get<BookDetailedDTO[]>(`${this.getBooksByDiscountEndpoint}`);
  }
  getBooksByAuthorName(authorName:string):Observable<BookDetailedDTO[]>{
    console.log("inside get books by AuthorName "+this.getBooksByAuthorNameEndpoint);
    this.getBooksByAuthorNameEndpoint=this.getBooksByAuthorNameEndpoint+'/'+authorName;
    return this.http.get<BookDetailedDTO[]>(`${this.getBooksByAuthorNameEndpoint}`);
  }
  getBooksByCategoryAndLanguage(category:string,language:string):Observable<BookDetailedDTO[]>{
    console.log("inside get books by category and language" +this.getBooksByCategoryAndlanguageEndpoint);
    this.getBooksByCategoryAndlanguageEndpoint=this.getBooksByCategoryAndlanguageEndpoint+'/'+category+'/'+language;
    return this.http.get<BookDetailedDTO[]>(`${this.getBooksByCategoryAndlanguageEndpoint}`);
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



}

