import { SwiftService } from './../../../services/swift.service';
import { TRANSACTION } from 'src/app/types/transaction.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-list-item',
  templateUrl: './transactions-list-item.component.html',
  styleUrls: ['./transactions-list-item.component.css']
})
export class TransactionsListItemComponent implements OnInit {
@Input() transaction?:TRANSACTION
  constructor(private swiftService:SwiftService) { }

  ngOnInit(): void {
  }

  deleteTransaction(id:string){
      this.swiftService.deleteTransaction(id)
    }

}
