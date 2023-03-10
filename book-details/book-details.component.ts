import { Component } from '@angular/core';
import { Book } from '../book';

import { BookOperationsService } from '../book-operations.service';
import { BookDetailedDTO } from '../book-detailed-dto'; 

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  __bookService:BookOperationsService

  allBooks:Array<BookDetailedDTO> =[];


  constructor(bookService:BookOperationsService)
  {
    this.__bookService=bookService;
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


}
