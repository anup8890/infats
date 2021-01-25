import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { SoapService } from './_service/soap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infatswb1';
  xmlData:any;
  appIds="";
  bicentral="";

  constructor(private activatedRoute:ActivatedRoute)
  {
    /*this.soapService.getSoapData(this.appIds).subscribe((data) => {
      console.warn('SOAP data received:', data);
      this.xmlData = data;
    },
    (err) => {
      console.warn('Erroneous! Err:', err);
    });*/
  }

  ngOnInit() {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@"+this.activatedRoute.snapshot.queryParams.data);
    this.activatedRoute.queryParams.subscribe(params =>{
      this.appIds=params['appId'];
      this.bicentral=params['bicentral'];
    });
    console.log(this.appIds+"this.appIds_____this.bicentral"+this.bicentral);
   }
}
