import { Component } from '@angular/core';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  __bookService:BookOperationsService

  b:Book = new Book(0,'','','','','','','','','','');
  constructor(bookService:BookOperationsService)

  {
    this.__bookService=bookService;
  }
  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.b);
  }
  readBook(title:string,author:string,category:string,description:string,price:string,discount:string,publishDate:string,language:string,imageName:string)
  {
    let bookFromadmin :Book = new Book(0,title,author,category,description,price,discount,publishDate,'',language,imageName);

    this.__bookService.addBook(bookFromadmin)
  }
}
