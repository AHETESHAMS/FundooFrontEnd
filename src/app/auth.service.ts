import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from 'src/app/Service/user.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  // canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  //   if(!!localStorage.getItem("token")){
  //     return true;
  //   }else{
  //     this.router.navigate(['/login'])
  //   }
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!!localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(['/login'])
    }
  }

}
