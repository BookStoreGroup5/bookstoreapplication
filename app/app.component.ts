import { Component } from '@angular/core';
import { DataOperationsService } from './data-operations.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullApp';

  loginUsername:string = '';
  userRole :string = '';
  loginStatus:boolean = false;
  photo:string='';

  __dataService:DataOperationsService;

  constructor(dataService:DataOperationsService,private activatedRouter:ActivatedRoute,private router:Router)
  {
    this.__dataService = dataService;
    this.loginStatus = false;
  }

  verifyUser(username:string,password:string)
  {
    console.log("inside component ts : "+username+" & "+password);
    
    this.loginStatus = this.__dataService.doLogin(username,password);
    
    if(this.loginStatus == true)
    {
      // becoz local storage may give u null
      this.userRole =  localStorage.getItem('role') || '';
      this.loginUsername = localStorage.getItem('username') || '';
      this.photo = localStorage.getItem('photo') || '';
      
      console.log("username "+this.loginUsername)
      console.log("user role "+this.userRole);
      
    }
  }
  register()
  {
    this.router.navigate(['signup']);
  } 
  doLogout()
  {
    this.loginUsername = '';
    this.userRole = '';
    this.loginStatus= false;
    this.photo='';
    this.__dataService.doUserLogout();
  }

}

