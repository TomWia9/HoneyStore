import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.getCurrentUserValue();

    if (currentUser == null) {
      this.router.navigate(['/login']);
      return false;
    }

    if (currentUser.email === 'admin@admin') { // admin has email = admin@admin
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}
