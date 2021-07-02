import { SwiftService } from './swift.service';
import { Router} from '@angular/router';
import { User } from './../types/user.interface';
import { AUTH_RES } from './../types/auth-res.interface';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ,private userService:UserService, private router:Router, private swiftService:SwiftService)  { }

  baseRoute = 'http://localhost:3000/auth'
  signin(email: string, password: string) { 
    this.http.post<AUTH_RES>(`${this.baseRoute}/signin`,{
       email,
       password
    }).subscribe(
      data =>{
        this.userService.setUser(data),
        this.router.navigateByUrl('/')
      },
      err =>console.log(err)
    )
  }

  signup(name: string, email: string, password: string) { 
    this.http.post<User>(`${this.baseRoute}/signup`,{
      name,
      email,
      password
   }).subscribe(
     data => this.router.navigateByUrl('/signin'),
     err =>console.log(err)
   )
  }

  signout(){
this.userService.signout()

  }
}
