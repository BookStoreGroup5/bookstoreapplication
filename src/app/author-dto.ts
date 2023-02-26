export class AuthorDTO {
   
    authorId:number;
	  authorName:string;
      about:string;
	  noOfBooksPublished:number;
	  
	  imageName:string;


      constructor(
        authorId:number,
        authorName:string,
        about:string,
        noOfBooksPublished:number,
        
        imageName:string
      )
      {
        this.authorId=authorId;
        this.authorName=authorName;
        this.about=about;
        this.noOfBooksPublished=noOfBooksPublished;
        this.imageName=imageName;
      }

}
