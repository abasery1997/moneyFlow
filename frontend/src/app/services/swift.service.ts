import { Router } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ACCOUNT } from './../types/account.interface';
import { Injectable } from '@angular/core';
import { TRANSACTION } from '../types/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class SwiftService {
  private _accounts: ACCOUNT[] = []
  private _transactions: TRANSACTION[] = []
  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  baseUrl: string = 'http://localhost:3000/swift/transactions'
  setTransactions(transactions: TRANSACTION[]) {
    this._transactions = transactions
  }
  setAccounts(accounts: ACCOUNT[]) {
    this._accounts = accounts
  }
  get accounts() {
    return this._accounts.slice()
  }

  get transactions() {
    return this._transactions.slice()
  }
  setheaders() {
    return {
      headers: {
        authorization: this.userService.getToken()!
      }
    }
  }
  fetchSwift() {
    this.http.get<{
      accounts: ACCOUNT[],
      transactions: TRANSACTION[]
    }>('http://localhost:3000/swift', this.setheaders())
      .subscribe(

        data => {
          this.setAccounts(data.accounts),
            this.setTransactions(data.transactions)
        },
        err => console.log(err)
      )
  }
  //delete transaction
  deleteTransaction(id: string) {
    this.http.delete<{
      accounts: ACCOUNT[],
      transaction: TRANSACTION
    }>(`${this.baseUrl}/${id}`, this.setheaders())
      .subscribe(
        data => {
          this.setAccounts(data.accounts)
          const transactionIndex = this._transactions.findIndex(tr => tr._id == data.transaction._id)
          this._transactions.splice(transactionIndex, 1)
          this.setTransactions(this.transactions)

        },
        err => { console.log(err) }
      )
  }
}
