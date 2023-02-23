import { Component } from '@angular/core';
import { OrderDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';

@Component({
  selector: 'app-orders-on-category',
  templateUrl: './orders-on-category.component.html',
  styleUrls: ['./orders-on-category.component.css']
})
export class OrdersOnCategoryComponent {


  allOrders:OrderDTO [] = [];
  constructor(private orderService:OrderOperationService){}


  getOrders(categoryName:string){
    this.orderService.getOrderDetailsbyCategory(categoryName).subscribe(
      data=>{
        console.log("data :- "+data);

        this.allOrders = data;
      },err=>{
        console.log("error from spring ",err);

      } 
    );
  }

}
