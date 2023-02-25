import { Component } from '@angular/core';
import { BookReview } from '../book-review';
import { BookReviewService } from '../book-review.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent {

  model: BookReview = new BookReview(0,0,0,'');
  submitted = false;
  success = false;
  error = false;
  rating = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  constructor(private bookReviewService: BookReviewService) {}

  onSubmit() {
    this.bookReviewService.submitBookReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="book review submitted";

      },
      error=>{

      }

    )

  }

}
