import { Component } from '@angular/core';
import { OrderOperationsService } from '../order-operations.service';
import { OrderDTO } from '../order-dto';




@Component({
  selector: 'app-orders-on-category',
  templateUrl: './orders-on-category.component.html',
  styleUrls: ['./orders-on-category.component.css']
})
export class OrdersOnCategoryComponent {
  allOrders:OrderDTO [] = [];
  constructor(private orderService:OrderOperationsService){}


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
