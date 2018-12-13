import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  coins = []
  id: number;
  myCoins: number;
  currentValue: number;


  constructor(private _coinService: CoinService) { 

  }
  
  ngOnInit() {
    this.getCoins();
    this.getId();
    this.getMyCoins();
    this.currentValue = this.coins[this.coins.length-1];
    console.log(`Sell Component. Coins: ${this.coins}`)
  }

  getCoins(){
    this.coins = this._coinService.shareCoins();
  }
  addToCoins(coin){
    this._coinService.addToCoins(coin);
  }
  addToTransactions(transaction){
    this._coinService.addToTransactions(transaction);
  }
  getId(){
    this.id = this._coinService.shareId();
  }
  incrementId(){
    this._coinService.incrementId();
  }
  getMyCoins(){
    this.myCoins = this._coinService.shareMyCoins();
  }
  addToMyCoins(){
    this._coinService.addToMyCoins();
  }
  subtractFromMyCoins(){
    this._coinService.subtractFromMyCoins();
  }

  sellCoin(){
    if(this.myCoins > 0 && this.coins[this.coins.length-1] > 0){
      this.subtractFromMyCoins();
      this.getMyCoins();
      console.log(`Sell Component. My Coins: ${this.myCoins}`)
      let tempCoin = this.coins[this.coins.length-1];
      tempCoin--;
      this.addToCoins(tempCoin);
      this.getId();
      this.incrementId();
      this.addToTransactions({"id": this.id, "action": 'Sold', "amount": 1, "value": tempCoin})
      this.currentValue = this.coins[this.coins.length-1];
    
    } else if (this.myCoins == 0){
      console.log(`You have no coins to sell.`)
    } else if (this.coins[this.coins.length-1] = 0){
      console.log(`ShintoCoin value is 0. Cannot sell.`)
    }
  }

}
