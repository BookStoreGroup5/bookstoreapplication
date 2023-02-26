import { Component } from '@angular/core';
import { OrderDTO } from '../order-dto';
import { OrderOperationsService } from '../order-operations.service';

@Component({
  selector: 'app-order-on-category',
  templateUrl: './order-on-category.component.html',
  styleUrls: ['./order-on-category.component.css']
})
export class OrderOnCategoryComponent {

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
