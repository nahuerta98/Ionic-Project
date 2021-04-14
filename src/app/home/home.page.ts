import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {}
  
  //Navigation
  Login(){
    this.router.navigateByUrl('/login');
  }
  Register(){
    this.router.navigateByUrl('/register');
  }
}
