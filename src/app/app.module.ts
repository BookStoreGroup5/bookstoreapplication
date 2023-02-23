import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { BoxSetsComponent } from './box-sets/box-sets.component';
import { FeaturedAuthorsComponent } from './featured-authors/featured-authors.component';
import { RequestaBookComponent } from './requesta-book/requesta-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { OrdersOnCategoryComponent } from './orders-on-category/orders-on-category.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { BooksComponent } from './books/books.component';



const allLinks:Routes = [
  {path:'admin',component:AdminComponent},
  {path:'bookCategory',component:BookCategoryComponent},
  {path:'newArrivals',component:NewArrivalsComponent},
  {path:'bestSellers',component:BestSellersComponent},
  {path:'boxSets',component:BoxSetsComponent},
  {path:'featuredAuthors',component:FeaturedAuthorsComponent},
  {path:'requestaBook',component:RequestaBookComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'bookDetails',component:BookDetailsComponent},
  {path:'ordersList',component:OrdersListComponent},
  {path:'orderListOnCategory',component:OrdersOnCategoryComponent},
  {path:'order',component:OrdersComponent},
  {path:'books',component:BooksComponent}
  


]

@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    BoxSetsComponent,
    FeaturedAuthorsComponent,
    RequestaBookComponent,
    BookDetailsComponent,
    AddBookComponent,
    AdminComponent,
    BooksComponent,
    OrdersComponent,
    OrdersOnCategoryComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
