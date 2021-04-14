import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Team4ApiService } from "../../services/team4-api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  protected loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private teamApiService: Team4ApiService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  isValid(field: string) {
    return (
      this.loginForm.get(field).invalid && this.loginForm.get(field).touched
    );
  }

  login() {
    if (this.loginForm.valid) {
      this.teamApiService
        .login(
          this.loginForm.get("email").value,
          this.loginForm.get("password").value
        )
        .subscribe((token) => {
          localStorage.setItem('currentToken', JSON.stringify(token));
          this.router.navigateByUrl("/characters-list");
        }, (err) =>{
          this.showErrorAlert();
        });
    }
  }

  showErrorAlert(){
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: 'Invalid credentials',
      showConfirmButton: false
    });
  }

  forgotPassword() {
    this.router.navigateByUrl("/recover-password");
  }
}
