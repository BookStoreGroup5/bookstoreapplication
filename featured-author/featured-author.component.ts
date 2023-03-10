import { Component } from '@angular/core';
import { Author } from '../author';
import { AuthorDTO } from '../author-dto';
import { AuthorOperationService } from '../author-operation.service';
import { BookOperationsService } from '../book-operations.service';
import { BookDetailedDTO } from '../book-detailed-dto'; 

@Component({
  selector: 'app-featured-author',
  templateUrl: './featured-author.component.html',
  styleUrls: ['./featured-author.component.css']
})
export class FeaturedAuthorComponent {


  __authorService:AuthorOperationService;
  __bookService:BookOperationsService;

  allAuthors:Array<AuthorDTO>=[];
  allBooks:Array<BookDetailedDTO>=[];

  constructor(authorService:AuthorOperationService,bookService:BookOperationsService)
  {
    this.__authorService=authorService;
    this.__bookService=bookService;


    this.__authorService.getAllAuthors().subscribe(
      data=>{
        console.log("data:-"+data);
        this.allAuthors=data;
      },
      err=>{
        console.log("error from spring",err);
      }
    )

  }
  viewBooks(authorName:string)
  {
    this.__bookService.getBooksByAuthorName(authorName).subscribe(
      data=>{
        console.log("data:-"+data);
        this.allBooks=data;
      }, err=>{
        console.log("error from spring" ,err);

      }  
    ) 
  }
}
