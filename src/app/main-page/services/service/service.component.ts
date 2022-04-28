import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @Input() serviceInfo:any;
  service:any = null;

  constructor(private http:HttpClient) {
    
   }

  ngOnInit(): void {
    this.service = this.serviceInfo;
    // this.http.get("../../../../assets/json/services/"+this.name+".json").subscribe(data =>{
    //   console.log(data);
    //   this.service = data;
    // })
  }

}
