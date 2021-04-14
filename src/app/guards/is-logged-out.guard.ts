import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Team4ApiService } from '../services/team4-api.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedOutGuard implements CanActivate {
  
  constructor(private authService: Team4ApiService, private route: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuth()) {
      return true;
    } else {
      this.route.navigateByUrl('/characters-list');
    }
  }
  
}
