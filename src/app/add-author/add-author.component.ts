import { Component } from '@angular/core';
import { Author } from '../author';
import { AuthorOperationService } from '../author-operation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {

  __authorService:AuthorOperationService

  submitted=false;
  success=false;
  error=false;
  status=false;
  message='';

  a:Author = new Author('','',0,'','','');

  constructor( authorService: AuthorOperationService ,private activatedRouter:ActivatedRoute,private router:Router)
  {
   this.__authorService=authorService;
  }
  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.a);

    this.__authorService.submitAuthor(this.a).subscribe(
      data=>{
        this.status= true;
        this.message="Book Added";
      }, error=>{

      } 
    )
    
  }

}
