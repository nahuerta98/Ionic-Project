import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterProfilePageRoutingModule } from './character-profile-routing.module';

import { CharacterProfilePage } from './character-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterProfilePageRoutingModule
  ],
  declarations: [CharacterProfilePage]
})
export class CharacterProfilePageModule {}
