import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Team4ApiService } from '../../services/team4-api.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  protected registerForm: FormGroup;
  protected matchNotSuccess: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private teamApiService: Team4ApiService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern("[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"),
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
      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
    },{
      validator: this.confirmPasswordMatch('password', 'confirmPassword')
    });
  }

  confirmPasswordMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const field = formGroup.controls[password];
      const matchingField = formGroup.controls[confirmPassword];

      if (field.value !== matchingField.value && matchingField.touched) {
        matchingField.setErrors({ confirmPasswordMatch: true });
        this.matchNotSuccess = true;
      } else {
        matchingField.setErrors(null);
        this.matchNotSuccess = false;
      }
    };
  }

  isValid(field: string) {
    return (
      this.registerForm.get(field).invalid &&
      this.registerForm.get(field).touched
    );
  }
  //Navigation
  register() {
    if (this.registerForm.valid) {
      this.teamApiService.register(this.registerForm.value).subscribe(() =>{
        this.showSuccessAlert();
        this.router.navigateByUrl("/home");
      }, (err) => {
        this.showErrorAlert();
      });
    }
  }

  showSuccessAlert(){
    Swal.fire({
      icon: 'success',
      title: 'User registered successfully!',
      text: 'Now you have access to all our data',
      showConfirmButton: false
    });
  }

  showErrorAlert(){
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: 'Please check your inputs',
      showConfirmButton: false
    });
  }
}
