import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { Team4ApiService } from "../../services/team4-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.page.html",
  styleUrls: ["./recover-password.page.scss"],
})
export class RecoverPasswordPage implements OnInit {
  protected recoverPasswordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private team4Service: Team4ApiService,
    private route: Router
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.recoverPasswordForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  isValid(field: string) {
    return (
      this.recoverPasswordForm.get(field).invalid &&
      this.recoverPasswordForm.get(field).touched
    );
  }

  recoverPassword() {
    if (this.recoverPasswordForm.valid) {
      this.team4Service
        .recoverPassword(this.recoverPasswordForm.getRawValue())
        .subscribe((id: recoveryPassword) => {
            if(id){
              this.route.navigate(['/set-password', id._id]);
            } else {
              this.showErrorAlert();
            }
          }
        );
    }
  }

  showErrorAlert() {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: "Invalid credentials",
      showConfirmButton: false,
    });
  }
}
