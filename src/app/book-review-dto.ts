export class BookReviewDTO {

    reviewId : number;
    bookId : number;
    rating :number;
    comment :string;
    
    constructor(reviewId:number, bookId : number, rating :number, comment :string ){
    
        this.reviewId = reviewId;
        this.bookId = bookId;
        this.rating = rating;
        this.comment = comment;
        
}
}
