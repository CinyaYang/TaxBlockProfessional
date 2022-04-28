import { Component, OnInit } from '@angular/core';
import additionalServices from '../../../../assets/json/services/additionalServices.json';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css']
})
export class AdditionalServicesComponent implements OnInit {
  public additionalServices:String[] = additionalServices;

  constructor() { }

  ngOnInit(): void {
  }

}
