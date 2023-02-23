import { Component } from '@angular/core';
import { Author } from '../author';
import { AuthorOperationService } from '../author-operation.service';

@Component({
  selector: 'app-featured-author',
  templateUrl: './featured-author.component.html',
  styleUrls: ['./featured-author.component.css']
})
export class FeaturedAuthorComponent {

  __authorService:AuthorOperationService

  allAuthors:Array<Author>=[];
  constructor(authorService:AuthorOperationService)
  {
    this.__authorService=authorService;
    this.allAuthors=this.__authorService.getAuthorArr();
  }
}
