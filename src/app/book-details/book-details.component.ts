import { Component } from '@angular/core';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  __bookService:BookOperationsService

  allBooks:Array<Book> =[];

  constructor(bookService:BookOperationsService)
  {
    this.__bookService=bookService;
    this.allBooks=this.__bookService.getBookArr();
  }
 
    
  
}
