import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDTO } from './user';
import { HttpClient } from '@angular/common/http';

interface AppUser{
  username:string;
  password:string;
  role:string;
  photo:string;
 
}


@Injectable({
  providedIn: 'root'
})
export class DataOperationsService {

  baseURL='http://localhost:8085';
  loginURL:string=this.baseURL+'/user/login/';
 
  allAppUsers:AppUser[] = [];
 
  
  constructor(private http:HttpClient) { 
    let user1:AppUser = {
      username:"kavya",
      password : "123",
      role:"user",
      photo:"kavya.JPG"
    }
    let user2:AppUser = {
      username:"ramya",
      password : "123",
      role:"user",
      photo:"ramya.JPG"
    }
    let user3:AppUser = {
      username:"yamini",
      password : "123",
      role:"user",
      photo:"yamini.JPG"
    }
    let user4:AppUser = {
      username:"sravani",
      password : "123",
      role:"user",
      photo:"sravani.JPG"
    }
    let user5:AppUser = {
      username:"sakshi",
      password : "123",
      role:"user",
      photo:"sakshi.JPG"
    }
    let user6:AppUser = {
      username:"admin",
      password : "admin",
      role:"admin",
      photo:"admin.JPG"
    }

    this.allAppUsers = [user1,user2,user3,user4,user5,user6];

   

  }

  doLogin(ipUsername:string,ipPassword:string):boolean
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')

    
    
    console.log("inside Service : "+ipUsername+" & "+ipPassword);
   
    for(let i=0;i<this.allAppUsers.length;i++)
    {
       let thisUser:AppUser = this.allAppUsers[i];

       if(thisUser.username == ipUsername && thisUser.password == ipPassword)
       {

          localStorage.setItem("username",ipUsername);
          localStorage.setItem("role",thisUser.role);
          localStorage.setItem("loginStatus",true+'');
          localStorage.setItem("photo",thisUser.photo);
          
          console.log("inside service for true ");
          
          return true; // note the break is not applicable in forEach because of window property
       }

    }


   
    return false;
    
  } //end of doLogin

  doUserLogout()
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')

    console.log("inside Service logout ");

  }
  doSpringLogin(userId:string,password:string):Observable<UserLoginDTO>
{
  let a:string = this.loginURL+userId+'/'+password;
  console.log(a);
  return this.http.get<UserLoginDTO>(`${a}`);


}
  

}

