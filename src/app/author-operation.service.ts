import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './author';
import { AuthorDTO } from './author-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthorOperationService {


  baseURL='http://localhost:8085';

  getAuthorbyNameEndpoint=this.baseURL+'/author';
  addAuthorEndpoint=this.baseURL+'/author/register';
  getAllAuthorsEndpoint=this.baseURL+'/author/authorlist';
  getAuthorByNameEndpoint=this.baseURL+'/author';
  authorArr:Author[]=[];

  constructor( private http:HttpClient) { 
  
}
submitAuthor(author:Author):Observable<Author>
{
  console.log("inside service:"+this.addAuthorEndpoint);
  return this.http.post<Author>(`${this.addAuthorEndpoint}`,author);
}
getAllAuthors():Observable<AuthorDTO[]>{
  console.log("inside get method 1: Author" +this.getAllAuthorsEndpoint);
  return this.http.get<AuthorDTO[]>(`${this.getAllAuthorsEndpoint}`);
}
getAuthorByName(authorName:string):Observable<AuthorDTO[]>{
  console.log("inside get author by Name" +this.getAuthorByNameEndpoint);
  this.getAuthorByNameEndpoint=this.getAuthorByNameEndpoint+'/'+authorName;
  return this.http.get<AuthorDTO[]>(`${this.getAuthorByNameEndpoint}`);
}
getAuthorArr():Author[]
{
  return this.authorArr;
}
}
