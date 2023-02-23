export class Book {

    

    title:string;
    author:string;
    category:string;
    description:string;
    price:number;
    discount:number;
    
    publishDate:string;
    
    language:string;
    imageName:string;

    constructor(
        

        title:string,
        author:string,
        category:string,
        description:string,
       
        price:number,
        discount:number,
        publishDate:string,
        
        language:string,
        imageName:string


    )
    {
        

        this.title=title;
        this.author=author;
        this.category=category;
        this.description=description;
        this.discount=discount;
        this.price=price;
        this.publishDate=publishDate;
        
        this.language=language;
        this.imageName=imageName;

    }
}
