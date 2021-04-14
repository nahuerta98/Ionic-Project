import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterProfilePage } from './character-profile.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterProfilePageRoutingModule {}
