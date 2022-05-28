// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { url } from 'node:inspector';
// import { Observable } from 'rxjs';
// import { AuthService } from './services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })

// // export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

// //   constructor(
// //     private authservice:AuthService,
// //     private router:Router
// //   ){}

// //   // canActivate(
// //   //   route: ActivatedRouteSnapshot,
// //   //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //   //   let url: string = state.url;
// //   //     return this.checkLogin(url);
// //   // }
// //   // canActivateChild(
// //   //   next:ActivatedRouteSnapshot,
// //   //   // childRoute: ActivatedRouteSnapshot,
// //   //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //   //   return this. canActivate(next,state);
// //   // }
// //   // canDeactivate(
// //   //   component: unknown,
// //   //   currentRoute: ActivatedRouteSnapshot,
// //   //   currentState: RouterStateSnapshot,
// //   //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //   //   return true;
// //   // }
// //   // canLoad(
// //   //   route: Route,
// //   //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //   //   let url= `${route.path}`;
// //   //     // return this.checkLogin(url);
// //   // }
  
// //   // // checkLogin(url: string): boolean {
// //   // //   if (this.authservice.isLoggedIn()) {
// //   // //     return true;
// //   // //   }

// //   // //   // Store the attempted URL for redirecting
// //   // //   this.authservice.redirectUrl = url;

// //   // //   this.router.navigate(['/auth/login']);
// //   // //   return false;
// //   // // }

// // }
