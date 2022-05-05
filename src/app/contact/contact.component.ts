import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import './../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  comments: string = '';
  subject: string = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any) {
    this.http.post("https://formsubmit.co/6bb64567d0f54eaac2a8c7ac0f744696",data)
  }

}
