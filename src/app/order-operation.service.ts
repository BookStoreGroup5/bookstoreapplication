import { Injectable } from '@angular/core';
import { OrderDTO } from './order-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OrderOperationService {

  

  baseURL = 'http://localhost:8085';

  allOrderEndpoint = this.baseURL+'/orderdetails/orders';
  orderByCategoryEndpoint=this.baseURL+'orderdetails/order/category';
  addOrderEndpoint=this.baseURL+'/addorder'

  

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
    console.log("After adding city 2 "+this.orderByCategoryEndpoint);

    return this.http.get<OrderDTO[]>(`${this.orderByCategoryEndpoint}`);
  }

  getOrderArr():OrderDTO[]
  {
    return this.orderArr;
  }
  addOrder(orderFromUser:OrderDTO):Observable<OrderDTO>
  {

    this.orderArr.push(orderFromUser); 
    console.log("Inside Product Service : Product Added "+orderFromUser.bookingOrderId);
    console.log(" Total Products Are :- "+this.orderArr.length);
    console.log('Order Service - Add Order called ');
    return this.http.post<OrderDTO>(`${this.addOrderEndpoint}`,orderFromUser);

  }
}
