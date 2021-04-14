import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Team4ApiService } from '../../services/team4-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
})
export class SetPasswordPage implements OnInit {
  protected setPasswordForm: FormGroup;
  protected matchNotSuccess: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private team4Service: Team4ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.setPasswordForm = this.formBuilder.group({
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
      ]},{
        validator: this.confirmPasswordMatch('password', 'confirmPassword')
      });
  }

  isValid(field: string) {
    return (
      this.setPasswordForm.get(field).invalid &&
      this.setPasswordForm.get(field).touched
    );
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

  setPassword(){
    let id = this.route.snapshot.paramMap.get('id');
    this.team4Service.setPassword(id,this.setPasswordForm.getRawValue()).subscribe(
      (res) => {
        this.showSuccessAlert();
        this.router.navigate(['/login']);
      }, (err) =>{
        this.showErrorAlert();
      }
    )
  }

  showSuccessAlert(){
    Swal.fire({
      icon: 'success',
      title: 'User registered successfully!',
      text: 'Now you have access to all our data',
      showConfirmButton: false
    });
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
