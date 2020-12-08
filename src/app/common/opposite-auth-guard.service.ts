import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class OppositeAuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
      if(sessionStorage.getItem('userName')){
          return true;
      }else{
        this.router.navigateByUrl('login');
        return false;
      }
  }
}
