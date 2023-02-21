import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { BoxSetsComponent } from './box-sets/box-sets.component';
import { FeaturedAuthorComponent } from './featured-author/featured-author.component';
import { RequestABookComponent } from './request-a-book/request-a-book.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const allLinks:Routes=[
  {path:'bookCategory',component:BookComponent},
  {path:'newArrivals',component:NewArrivalsComponent},
  {path:'bestSellers',component:BestSellersComponent},
  {path:'boxSets',component:BoxSetsComponent},
  {path:'featuredAuthors',component:FeaturedAuthorComponent},
  {path:'Requestabook',component:RequestABookComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'bookDetails',component:BookDetailsComponent},
  {path:'admin',component:AdminComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    BoxSetsComponent,
    FeaturedAuthorComponent,
    RequestABookComponent,
    AddBookComponent,
    AdminComponent,
    BookDetailsComponent
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
