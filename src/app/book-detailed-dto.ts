export class BookDetailedDTO {


    bookId:number;
    title:string;
    author:string;
    language:string;
    category:string;
    price:number;
    discount:number;
    publishDate:string;
    imageName:string;
    description:string;

    constructor(
    bookId:number,
    title:string,
    author:string,
    language:string,
    category:string,
    price:number,
    discount:number,
    publishDate:string,
    imageName:string,description:string

    )
    {
        this.bookId=bookId;
        this.title=title;
        this.author=author;
        this.language=language;
        this.category=category;
        this.price=price;
        this.discount=discount;
        this.publishDate=publishDate;
        this.imageName=imageName;
        this.description=description;
    }
}
