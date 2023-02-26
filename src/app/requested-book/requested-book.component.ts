import { Component } from '@angular/core';
import { BookOperationsService } from '../book-operations.service';
import { BookRequest } from '../book-request';

@Component({
  selector: 'app-requested-book',
  templateUrl: './requested-book.component.html',
  styleUrls: ['./requested-book.component.css']
})
export class RequestedBookComponent {

  __bookService:BookOperationsService;
    b:BookRequest = new BookRequest(0,'','',0,'',0); 
   bookRequestArr:BookRequest[]=[];  
   constructor(bookService:BookOperationsService) {
     this.__bookService = bookService;
    this.bookRequestArr=bookService.bookRequestArr;
    }
}
