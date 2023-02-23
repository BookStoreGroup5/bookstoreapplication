import { Component } from '@angular/core';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';
import { BookRequest } from '../book-request';

@Component({
  selector: 'app-request-a-book',
  templateUrl: './request-a-book.component.html',
  styleUrls: ['./request-a-book.component.css']
})
export class RequestABookComponent {

  __bookService:BookOperationsService;
  b:BookRequest = new BookRequest(0,'','',0,'',0);
  constructor(bookService:BookOperationsService)
   {
     this.__bookService = bookService;
  }
   
   doFormSubmit()
    { this.__bookService.addBookRequest(this.b);
    console.log("form submit button clicked ")
     console.log(this.b); }
  
}
