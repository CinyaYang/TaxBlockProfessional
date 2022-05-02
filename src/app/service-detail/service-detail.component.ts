import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  article:any = null;
  code:any = null;
  stats:any = false;

  constructor(private http:HttpClient, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.service = this.serviceDetail;
    this.actRoute.paramMap.subscribe(params => {
      this.code = String(params.get('code'));
    });

    this.http.get("../../../../assets/json/articles/"+this.code+".json").subscribe(article =>{
      
      this.article = article;
      this.stats = true;
      console.log(article);
    })
    
  }

  componentDidMount() {
    
  }

}
