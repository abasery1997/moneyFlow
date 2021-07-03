import { TransactionsCreationComponent } from './components/swift/transactions-creation/transactions-creation.component';
import { AccountsCreationComponent } from './components/swift/accounts-creation/accounts-creation.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRequiredGuard } from './guards/auth-required.guard';
import { UnAuthRequiredGuard } from './guards/un-auth-required.guard';

const routes: Routes = [
  {
    path :'',
    component:HomeComponent,
    canActivate:[AuthRequiredGuard]

  },
  {
    path:'signin',
    component:SigninComponent,
    canActivate:[UnAuthRequiredGuard]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[UnAuthRequiredGuard]

  },
  {

    path:'newaccount',
    component :AccountsCreationComponent,
    canActivate:[AuthRequiredGuard]
  },
  {
    path:'newtransaction',
    component:TransactionsCreationComponent,
    canActivate:[AuthRequiredGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
