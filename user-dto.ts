export class UserDTO {

    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
    gender: string;
    emailId: string;
    userRole:string;
    address:string;


    constructor(

        firstName: string,
        lastName: string,
        password: string,
        phoneNumber: string,
        gender: string,
        emailId: string,
        userRole:string,
        address:string

    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.emailId = emailId;
        this.userRole=userRole;
        this.address=address;
    }

}
