import { Component } from '@angular/core';
import { OrderDTO,OrderRequestDTO } from '../order-dto';
import { OrderOperationsService } from '../order-operations.service'; 

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
    bookId:string;
    title:string;
    author:string;
    language:string;
    category:string;
    price:string;
    discount:string;
    publishDate:string;
    imageName:string;
    description:string;

    order:OrderRequestDTO = new OrderRequestDTO('','',0,0,0,0,'');

  orderDto:OrderDTO = new OrderDTO(0,0,'','',0,0,0,0,'','');



  constructor(private orderService:OrderOperationsService) {
    this.bookId=localStorage.getItem("bookId")||'';
    this.title=localStorage.getItem("title")||'';
    this.author=localStorage.getItem("author")||'';
    this.language=localStorage.getItem("language") ||'';
    this.category=localStorage.getItem("category") ||'';
    this.price=localStorage.getItem("price") ||'';
    this.discount=localStorage.getItem("discount") ||'';
    this.publishDate=localStorage.getItem("publishDate") ||'';
    this.imageName=localStorage.getItem("imageName") ||'';
    this.description=localStorage.getItem("description") ||'';
    console.log("---------------------------- inside constructor")
    console.log("category" +this.category);
    console.log("cost" +this.price);
    console.log("bookId" +this.bookId);

    this.order.category=this.category;
    this.order.totalAmount=parseInt(this.price);
    this.order.bookId=parseInt(this.bookId);

   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.order);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.orderService.addOrder(this.order).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          //code to navigate to order successful page
      },
      error => {
        console.log(error);

      }
     );

}

}
