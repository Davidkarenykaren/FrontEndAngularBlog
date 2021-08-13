import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './shared/components/signup/signup.component';
import { SigninComponent } from './shared/components/signin/signin.component';
import{AuthGuard} from './auth.guard';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'publicaciones',
  loadChildren: () => import('./pages/publicaciones/publicaciones.module')
  .then(m => m.PublicacionesModule),
  canActivate: [AuthGuard] },
  {
    path: '**', redirectTo: '/publicaciones', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
