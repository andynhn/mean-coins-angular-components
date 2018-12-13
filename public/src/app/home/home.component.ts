import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _coinService: CoinService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
  }

}
