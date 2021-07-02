import { SwiftService } from './../../../services/swift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  constructor( private swiftService:SwiftService) { }

  get transactions(){

    return this.swiftService.transactions
  }
  get accounts(){
    return this.swiftService.accounts
    }
  

  ngOnInit(): void {
  }

}
