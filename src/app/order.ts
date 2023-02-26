export class Order {

    userName:string;
    bookId:number;
    transactionMode:string;
    customerId:number;
    quantity:number;
    totalAmount:number;


    constructor(
        userName:string,
    bookId:number,
    transactionMode:string,
    customerId:number,
    quantity:number,
    totalAmount:number,
    )
    {
        this.userName=userName;
        this.bookId=bookId;
        this.transactionMode=transactionMode;
        this.customerId=customerId;
        this.quantity=quantity;
        this.totalAmount=totalAmount;

    }
}
