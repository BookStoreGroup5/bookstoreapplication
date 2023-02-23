import { Component } from '@angular/core';
import { BookRequest } from '../book-request';
import { BookOperationsService } from '../book-operations.service';

@Component({
  selector: 'app-requesta-book',
  templateUrl: './requesta-book.component.html',
  styleUrls: ['./requesta-book.component.css']
})
export class RequestaBookComponent {

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
