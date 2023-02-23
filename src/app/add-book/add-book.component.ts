import { Component } from '@angular/core';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  __bookService:BookOperationsService

 
  

  //allBooks:BookDTO[]=[];
  submitted=false;
  success=false;
  error=false;
  status=false;
  message='';
  b:Book = new Book('','','','',0,0,'','','');
  constructor( bookService: BookOperationsService ,private activatedRouter:ActivatedRoute,private router:Router)
  {
    this.__bookService=bookService;
   
  }

  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.b);

    this.__bookService.submitBook(this.b).subscribe(
      data=>{
        this.status=true;
        this.message="Book Added";
      },error=>{

      }
    )
    this.router.navigate(['bookDetails']);
  }
  
}
