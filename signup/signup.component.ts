import { Component } from '@angular/core';
import { User } from '../user';
import { UserOperationsService } from '../user-operations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  __userService:UserOperationsService

  submitted=false;
  success=false;
  error=false;
  status=false;
  message='';
  b:User = new User('','','','','','','','');
  constructor( userService: UserOperationsService ,private activatedRouter:ActivatedRoute,private router:Router)
  {
   this.__userService=userService;
  }

  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.b);

    this.__userService.submitUser(this.b).subscribe(
      data=>{
        this.status= true;
        this.message="User Added";
      }, error=>{

      } 
    )
    this.router.navigate(['bookDetails']);
  }


}
