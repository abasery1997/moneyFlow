import { SwiftService } from './../../../services/swift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  constructor(private swiftService:SwiftService) { }

  ngOnInit(): void {
  }

  get transactions(){
    return this.swiftService.transactions;
  }

}
