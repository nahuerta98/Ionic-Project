import { Component, OnInit } from "@angular/core";
import { Team4ApiService } from "../../services/team4-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  protected user;
  protected flag = false;

  constructor(private teamApiService: Team4ApiService, private router: Router) {
    teamApiService.getUser().subscribe((userData) => {
      this.user = userData;
      this.flag = true;
    });
  }

  ngOnInit() {}

  logout() {
    this.teamApiService.logout();
    this.router.navigate(["/home"]);
  }
}
