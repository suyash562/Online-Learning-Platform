import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Injectable()
export class ProfileGuard implements CanActivate{

  constructor(private router : Router, private profileService : UserService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if(this.profileService.role === 'Admin')
      return true;
    return this.router.createUrlTree(['profile','login']);
  }
}
