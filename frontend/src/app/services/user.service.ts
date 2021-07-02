import { Router } from '@angular/router';
import { AUTH_RES } from './../types/auth-res.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router) { }

  setUser(data:AUTH_RES){
    window.localStorage.setItem('token',`${data.token}`)
    window.localStorage.setItem('user',JSON.stringify(data.user))
  }
  getUser(){
    return JSON.parse(window.localStorage.getItem('user'))
  }
    getToken(){
    return window.localStorage.getItem('token')
  }
  signout(){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    this.router.navigateByUrl('/signin')
  }

  get userExists(){
    return !!this.getUser()
  }
}
