import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  coins = []
  id: number;

  constructor(private _coinService: CoinService) { 

  }
  
  ngOnInit() {
    this.getCoins();
    this.getId();
    console.log(`Mine Component. Coins: ${this.coins}`)
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
  mineCoin(){
    if(this.coins.length > 0){
      let tempCoin = this.coins[this.coins.length-1];
      tempCoin++;
      this.addToCoins(tempCoin);
      this.getCoins();
      console.log(`Mine Component. Coins: ${this.coins}`)
      this.getId();
      this.incrementId();
      this.addToTransactions({"id": this.id, "action": 'Mined', "amount": 1, "value": tempCoin})
    
    } else if (this.coins.length == 0){
      this.addToCoins(1);
      this.getCoins()
      console.log(`Mine Component. Coins: ${this.coins}`)
      this.getId();
      this.incrementId();
      this.addToTransactions({"id": this.id, "action": 'Mined', "amount": 1, "value": 1})
    }
  }

}
