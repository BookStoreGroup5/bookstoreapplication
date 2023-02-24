export class Author {

    authorName:string;
    about:string;
    noOfBooksPublished:number;
    email:string;
    phoneNumber:string;

    imageName:string;

    constructor(
        authorName:string,
        about:string,
        noOfBooksPublished:number,
    email:string,
    phoneNumber:string,
    
        imageName:string
    )
    {
        this.authorName=authorName;
        this.about=about;
        this.noOfBooksPublished=noOfBooksPublished;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.imageName=imageName;
    }
}
