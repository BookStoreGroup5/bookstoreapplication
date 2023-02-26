import { Injectable } from '@angular/core';
import { User } from './user';
import { UserDTO } from './user-dto';
import { UserRequest } from './user-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  Stock:number =0;
  baseURL='http://localhost:8085';
  addUserEndpoint=this.baseURL+'/user/add';
  getAllUsersEndpoint=this.baseURL+'/user/list';

  constructor( private http:HttpClient) { 

  }

  userArr:User[]=[];
  userRequestArr:UserRequest[]=[];
  submitUser(user:User):Observable<User>
  {
    console.log("inside service:"+this.addUserEndpoint);
    return this.http.post<User>(`${this.addUserEndpoint}`,user);
  }
  getAllUsers():Observable<UserDTO[]>{
    console.log("inside get method 1: Book" +this.getAllUsersEndpoint);
    return this.http.get<UserDTO[]>(`${this.getAllUsersEndpoint}`);
  }

  addUser(newUser:User)
  {
    this.userArr.push(newUser);
    console.log("Inside Book Service : Book Added ");
    console.log(" Total Users Are:- "+this.userArr.length);

  }
  getBookArr():User[]
  {
    return this.userArr;
  }
  
}
