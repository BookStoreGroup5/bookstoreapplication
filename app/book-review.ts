export class BookReview {
    id:number;
    bookId:number;
    rating :number;
    comment:string;

    constructor(id:number, bookId:number, rating:number,comment:string){
        this.id=id;
        this.bookId=bookId;
        this.rating = rating;
        this.comment=comment;
    }
}
