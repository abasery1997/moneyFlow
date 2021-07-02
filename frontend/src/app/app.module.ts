import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AccountsListComponent } from './components/swift/accounts-list/accounts-list.component';
import { AccountsListItemComponent } from './components/swift/accounts-list-item/accounts-list-item.component';
import { TransactionsListComponent } from './components/swift/transactions-list/transactions-list.component';
import { TransactionsListItemComponent } from './components/swift/transactions-list-item/transactions-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultBarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AccountsListComponent,
    AccountsListItemComponent,
    TransactionsListComponent,
    TransactionsListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
