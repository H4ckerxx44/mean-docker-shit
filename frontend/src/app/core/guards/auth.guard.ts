﻿import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuard
{
  constructor(private router: Router)
  {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (typeof window !== "undefined")
    {
      if (localStorage.getItem("currentUser"))
      {
        // logged in so return true
        return true;
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
