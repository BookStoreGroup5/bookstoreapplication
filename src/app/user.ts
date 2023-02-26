export class User {
    firstName : string ;
	lastName : string ;
	password : string ;
	phoneNumber : number;
	gender : string;
	emailId : string;

    constructor(
        
        firstName : string,
	    lastName : string,
	    password : string,
	    phoneNumber : number,
	    gender : string,
	    emailId : string,
         
     )

     {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.emailId = emailId;
     }

}

    export class UserLoginDTO {

        firstName : string ;
        lastName : string ;
        phoneNumber : number;
        userId : number;
        emailId : string;
        userRole : string;
        address : string;
    
        constructor(
            
            firstName : string,
            lastName : string,
            phoneNumber : number,
            userId : number,
            emailId : string,
            userRole : string,
            address : string,
             
         )
    
         {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phoneNumber = phoneNumber;
            this.userId = userId;
            this.emailId = emailId;
            this.userRole = userRole;
            this.address=address;
         }
    
    }

