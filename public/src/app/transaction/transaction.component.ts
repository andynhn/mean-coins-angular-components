import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions = [];
  transaction: any;

  constructor(
    private _coinService: CoinService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getTransactions();
    console.log(`Transaction Details: ${this.transactions}`)
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.transaction = this.transactions[params['id']-1]
    })
  }
  getTransactions(){
    this.transactions = this._coinService.shareTransactions();
  }

}
