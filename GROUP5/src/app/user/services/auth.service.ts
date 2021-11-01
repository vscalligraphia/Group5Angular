import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

const headerData = { headers: {'Content-Type': 'application/json' }}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api : string = '/api/users/';

  constructor(private httpClient: HttpClient) { }

  register(register: Register): Observable<any>
  {
    console.log(register)
    console.log("HELLLoooooadoadn")
    return this.httpClient.post('http://localhost:8080/api/add',register);
  }

  login(username: string, password: string): Observable<any> {

    console.log(username,password)
    return this.httpClient.get('http://localhost:8080/api/login/' + username +'/'+ password
    );
}

}
