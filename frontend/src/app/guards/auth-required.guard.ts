import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRequiredGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){

  }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const userExist =this.userService.userExists;

      if(!userExist){
        this.router.navigateByUrl('/signin')
      }
        
   
      return userExist;
  }

  
}
