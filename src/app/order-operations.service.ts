import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { OrderDTO, OrderRequestDTO } from './order-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderOperationsService {

  baseURL = 'http://localhost:8085';

  allOrderEndpoint = this.baseURL+'/orderdetails/orders';
  orderByCategoryEndpoint=this.baseURL+'/orderdetails/order/category';
  addOrderEndpoint=this.baseURL+'/orderdetails/addorder';


  orderArr:OrderDTO[] = [];
  constructor(private http:HttpClient) {

    console.log("Inside Constructor "+this.orderByCategoryEndpoint);
   }
   getAllOrdersFromSpring():Observable<OrderDTO[]>
  {
    console.log("inside service : "+this.allOrderEndpoint);
      return this.http.get<OrderDTO[]>(`${this.allOrderEndpoint}`);
  }

  getOrderDetailsbyCategory(category:string):Observable<OrderDTO[]>{
    console.log("Inside Method 1 "+this.orderByCategoryEndpoint);
    this.orderByCategoryEndpoint=this.orderByCategoryEndpoint+'/'+category;
    console.log("After adding category "+this.orderByCategoryEndpoint);

    return this.http.get<OrderDTO[]>(`${this.orderByCategoryEndpoint}`);
  }

  getOrderArr():OrderDTO[]
  {
    return this.orderArr;
  }
  addOrder(orderFromUser:Order):Observable<Order>
  {

    //this.orderArr.push(orderFromUser); 
    //console.log("Inside Product Service : Product Added "+orderFromUser.bookingOrderId);
    //console.log(" Total Products Are :- "+this.orderArr.length);
    console.log('Order Service - Add Order called ');
    return this.http.post<Order>(`${this.addOrderEndpoint}`,orderFromUser);

  }
}
