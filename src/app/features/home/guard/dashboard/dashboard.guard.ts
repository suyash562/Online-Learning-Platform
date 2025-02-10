import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

import {  Injectable } from '@angular/core';
import { UserService } from '../../../profile/services/user/user.service';

@Injectable()
export class DashboardGuard implements CanActivateChild{
  constructor(private userService : UserService,private router : Router){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.userService.role === 'Admin'){
      return true;
    }
    // alert('Not Authorized');
    return this.router.createUrlTree(['home','dashboard']);
    // return false;
  }
}