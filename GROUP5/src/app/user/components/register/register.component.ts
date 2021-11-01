import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';
import { Register } from '../../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerSubmit() {
    console.log("Hello Vishal")
    console.log(JSON.stringify(this.register))
    this.authService.register(this.register).subscribe((res) => {
      console.log(JSON.stringify(res))
      //navigate to login after successful registration 

      this.router.navigate(['/user/login']);
    },
      (err) => {
        console.log(JSON.stringify(err));

        this.error = err;
        console.log("ERRORewwqwq")
        console.log(err);
    })
  
  }

}
