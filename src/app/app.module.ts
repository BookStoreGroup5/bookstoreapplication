import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { FeaturedAuthorComponent } from './featured-author/featured-author.component';
import { RequestABookComponent } from './request-a-book/request-a-book.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestedBookComponent } from './requested-book/requested-book.component';
import { InfoPipe } from './info-pipe';
import { AddAuthorComponent } from './add-author/add-author.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { SignupComponent } from './signup/signup.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderOnCategoryComponent } from './order-on-category/order-on-category.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { AddressComponent } from './address/address.component';
import { ThankspageComponent } from './thankspage/thankspage.component';




const allLinks:Routes=[

 
  {path:'bestSellers',component:BestSellersComponent},
 {path:'books',component:BooksComponent},
  {path:'featuredAuthors',component:FeaturedAuthorComponent},
  {path:'Requestabook',component:RequestABookComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'bookDetails',component:BookDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'profile',component:ProfileComponent},
  {path:'requestedBooks',component:RequestedBookComponent},
  {path:'addAuthor',component:AddAuthorComponent},
  {path:'addReview',component:BookReviewComponent},
  {path:'signup',component:SignupComponent},
  {path:'addOrder',component:AddOrderComponent},
  {path:'orders',component:OrdersComponent},
  {path:'address',component:AddressComponent},
  {path:'thankspage',component:ThankspageComponent},
  
 
  
]
@NgModule({
  declarations: [
    AppComponent,
   
  
    BestSellersComponent,
   
    FeaturedAuthorComponent,
    RequestABookComponent,
    AddBookComponent,
    AdminComponent,
    BookDetailsComponent,
   
    BooksComponent,
    ProfileComponent,
    RequestedBookComponent,
    InfoPipe,
    AddAuthorComponent,
    BookReviewComponent,
    SignupComponent,
    AddOrderComponent,
    OrdersComponent,
    OrderOnCategoryComponent,
    OrdersListComponent,
    AddressComponent,
    ThankspageComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks),FormsModule,
    CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
