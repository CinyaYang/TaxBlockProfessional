import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service:any = null;
  serviceName:any = null;

  constructor(private http:HttpClient, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.service = this.serviceDetail;
    this.actRoute.paramMap.subscribe(params => {
      this.serviceName = String(params.get('serviceName'));
    });

    this.http.get("../../../../assets/json/services/"+this.serviceName+".json").subscribe(service =>{
      // console.log(data);
      this.service = service;
    })
  }

}
