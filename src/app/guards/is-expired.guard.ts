import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Team4ApiService } from '../services/team4-api.service';

@Injectable({
  providedIn: 'root'
})
export class IsExpiredGuard implements CanActivate {
  constructor(private authService: Team4ApiService, private route: Router) {}

  canActivate(): boolean {
    if (!this.authService.IsExpired()) {
      return true;
    } else {
      this.showAlert();
      this.authService.logout();
      this.route.navigate(['/home']);
    }
  }

  showAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Session expired!',
      text: 'Please login again',
    });
  }
  
}
