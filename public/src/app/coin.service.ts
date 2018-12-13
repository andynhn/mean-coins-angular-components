import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  transactions = [

  ];
  coins = [0];
  id = 1;
  myCoins = 0;

  constructor(private _http: HttpClient) { }
  
  shareTransactions(){
    return this.transactions;
  }
  addToTransactions(transaction){
    this.transactions.push(transaction);
  }
  shareCoins(){
    return this.coins;
  }
  addToCoins(coin){
    this.coins.push(coin);
  }
  shareId(){
    return this.id;
  }
  incrementId(){
    this.id++;
  }

  shareMyCoins(){
    return this.myCoins;
  }
  addToMyCoins(){
    this.myCoins++;
  }
  subtractFromMyCoins(){
    this.myCoins--;
  }



}
