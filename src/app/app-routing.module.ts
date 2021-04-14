import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsExpiredGuard } from './guards/is-expired.guard';
import { IsLoggedOutGuard } from './guards/is-logged-out.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule),
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: 'characters-list',
    loadChildren: () => import('./pages/characters-list/characters-list.module').then( m => m.CharactersListPageModule),
    canActivate: [IsLoggedGuard,IsExpiredGuard]
  },
  {
    path: 'character-profile/:id',
    loadChildren: () => import('./pages/character-profile/character-profile.module').then( m => m.CharacterProfilePageModule),
    canActivate: [IsLoggedGuard,IsExpiredGuard]
  },
  {
    path: 'episode/:id',
    loadChildren: () => import('./pages/episode/episode.module').then( m => m.EpisodePageModule),
    canActivate: [IsLoggedGuard,IsExpiredGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [IsLoggedGuard,IsExpiredGuard]
  },
  {
    path: 'set-password/:id',
    loadChildren: () => import('./pages/set-password/set-password.module').then( m => m.SetPasswordPageModule),
    canActivate: [IsLoggedOutGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
