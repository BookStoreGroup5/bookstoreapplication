export class OrderDTO {

    bookingOrderId:number;
    orderDate:number;
	transactionMode:string;
	quantity:number;
	totalCost:number;
    customerId:number;
	productId:number;
	category:string;

    constructor(
        bookingOrderId:number,
        orderDate:number,
        transactionMode:string,
        quantity:number,
        totalCost:number,
        customerId:number,
	    productId:number,
	    category:string
    )
    {
        this.bookingOrderId = bookingOrderId;
        this.orderDate = orderDate;
        this.transactionMode = transactionMode;
        this.quantity = quantity;
        this.totalCost = totalCost;
        this.customerId = customerId;
	    this.productId = productId;
	    this.category = category;
    }


}
