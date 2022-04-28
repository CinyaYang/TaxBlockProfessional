import { Component, OnInit } from '@angular/core';
import services from '../../../assets/json/services/services.json';
// import { Service } from '../../models/Service';
// import * as fs from 'fs';

// const fs = require('file-system');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public services:any = services;
  
  

  constructor() {
    console.log(services);
  //   const dir = '../../../assets/json/services';
  //   const files = fs.readdirSync(dir);
    
  //   for (const file of files) {
  //     console.log(file)
  //   }
   }

  ngOnInit(): void {
  }

}
