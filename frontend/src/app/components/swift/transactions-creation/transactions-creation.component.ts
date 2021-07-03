import { TryService } from './../../../services/try.service';
import { SwiftService } from './../../../services/swift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-creation',
  templateUrl: './transactions-creation.component.html',
  styleUrls: ['./transactions-creation.component.css']
})
export class TransactionsCreationComponent implements OnInit {
  types:string[]=['income','expense','transfer']
  fromFlag: boolean = true
  toFlag: boolean = true
  note: string = ''
  amount: string = ''
  fromSelect: string = ''
  toSelect: string = ''
  typeSelect: string = ''
  constructor(private swiftService: SwiftService, private tryService: TryService) { }


  ngOnInit(): void {
    this.swiftService.fetchSwift()
  }


  get accounts() {
    return this.swiftService.accounts
  }




  //do when select different value from the drop menu
  selectChange() {
    if (this.typeSelect == 'income') {
      this.fromFlag = false
      this.toFlag = true
      console.log('INCOME')
    } else if (this.typeSelect == 'expense') {
      this.toFlag = false
      this.fromFlag = true
      console.log('EXPENSE')

    } else {

      this.fromFlag = true
      this.toFlag = true
      console.log('TRANSFER')
    }
  }

  createTransaction() {
    console.log(this.note, this.amount, this.typeSelect, this.fromSelect, this.toSelect)
  }

}

