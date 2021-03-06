import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetPasswordPageRoutingModule } from './set-password-routing.module';

import { SetPasswordPage } from './set-password.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SetPasswordPageRoutingModule
  ],
  declarations: [SetPasswordPage]
})
export class SetPasswordPageModule {}
