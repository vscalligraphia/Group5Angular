import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  error: any = {};
 

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    console.log(this.login.username, this.login.password);
    this.authService.login(this.login.username, this.login.password).subscribe(res => {


     // console.log(res);
      console.log(JSON.stringify(res))


      //console.log(res.role.roleName)


    })
   
    console.log("HELLO LOGIN");
    if (this.login.username
      == "admin@gmail.com" && this.login.password == "admin@123") {
      this.router.navigate(['../admin/add-role'])
    }

    else {
      console.log("Hey")
      this.router.navigate(['../user'])
    }
    
  }

}
