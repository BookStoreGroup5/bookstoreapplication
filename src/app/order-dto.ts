export class OrderDTO {

    bookingOrderId:number;
    orderDate:number;
    userName:string;
	transactionMode:string;
	quantity:number;
	totalAmount:number;
    customerId:number;
	bookId:number;
	category:string;
    title:string;

    constructor(
        bookingOrderId:number,
        orderDate:number,
        userName:string,
        transactionMode:string,
        quantity:number,
        totalAmount:number,
        customerId:number,
	    bookId:number,
	    category:string,
        title:string
    )
    {
        this.bookingOrderId = bookingOrderId;
        this.orderDate = orderDate;
        this.userName=userName;
        this.transactionMode = transactionMode;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.customerId = customerId;
	    this.bookId = bookId;
	    this.category = category;
        this.title = title;
    }
}
export class OrderRequestDTO {

	transactionMode:string;
    userName:string;
	quantity:number;
	totalAmount:number;
    customerId:number;
	bookId:number;
	category:string;


    constructor(

        transactionMode:string,
        userName:string,
        quantity:number,
        totalAmount:number,
        customerId:number,
	    bookId:number,
	    category:string
    )
    {

        this.transactionMode = transactionMode;
        this.userName=userName;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.customerId = customerId;
	    this.bookId = bookId;
	    this.category = category;

    }
}
