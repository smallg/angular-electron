import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    try {
      const oracledb = require('oracledb');
      console.log(oracledb);
      console.log(oracledb.oracleClientVersion);
    } catch (error) {
      console.log(error);
    }

    console.log('oracledb required successfully');
  }

}
