import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
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
import { BookCategoryComponent } from './book-category/book-category.component';
import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestedBookComponent } from './requested-book/requested-book.component';
import { InfoPipe } from './info-pipe';

const allLinks:Routes=[
  {path:'bookCategory',component:BookCategoryComponent},
  {path:'newArrivals',component:NewArrivalsComponent},
  {path:'bestSellers',component:BestSellersComponent},
 {path:'books',component:BooksComponent},
  {path:'featuredAuthors',component:FeaturedAuthorComponent},
  {path:'Requestabook',component:RequestABookComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'bookDetails',component:BookDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'profile',component:ProfileComponent},
  {path:'requestedBooks',component:RequestedBookComponent}
]
@NgModule({
  declarations: [
    AppComponent,
   
    NewArrivalsComponent,
    BestSellersComponent,
   
    FeaturedAuthorComponent,
    RequestABookComponent,
    AddBookComponent,
    AdminComponent,
    BookDetailsComponent,
    BookCategoryComponent,
    BooksComponent,
    ProfileComponent,
    RequestedBookComponent,
    InfoPipe
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
