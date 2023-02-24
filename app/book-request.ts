export class  BookRequest{

    isbn:number;
    title:string;
    author:string;
    quantity:number;email:string;
    phoneNumber:number;
    
    constructor(
        isbn:number,
        title:string,
        author:string,
        quantity:number,
        email:string,
        phoneNumber:number
        )
        {
            this.isbn=isbn;
            this.title=title;
            this.author=author;
            this.quantity=quantity;
            this.email=email;
            this.phoneNumber=phoneNumber;
     }
}
