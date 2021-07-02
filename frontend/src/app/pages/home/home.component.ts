import { SwiftService } from './../../services/swift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title :string = 'hello world'
  constructor(private swiftService:SwiftService) {
    
   }

  get accounts(){
   return this.swiftService.accounts
  }

  get transactions(){
    return this.swiftService.transactions
  }

  ngOnInit(): void {
  this.swiftService.fetchSwift()
  }


}
