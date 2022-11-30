import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent },
 {path: 'register', component: RegisterPageComponent},
 { path: 'first-component', component: LoginPageComponent },
 { path: 'home', component: HomeComponent },
  {path: '', component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
