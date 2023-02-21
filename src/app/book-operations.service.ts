import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

  constructor() { }

  bookArr:Book[]=[];

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
}
