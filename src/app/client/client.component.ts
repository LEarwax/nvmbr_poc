import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


import { Client } from '../core/model/client.model';

const coreAPIEndpoint = "https://ctlvr-nvmbr-api-appservice.azurewebsites.net";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  testData: any;
  model = new Client("Nick", "123 Paper St", "Nick CEO", "Some Notes");
  
  testDisplay: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  getTestData() {
    this.http.get(`${coreAPIEndpoint}/api/noauthtest/test`).subscribe(
      (res) => {
        console.log("Response: ", res)
        this.testData = res;
      }
    )
  }

  createClient() {
    console.log("Model: ", this.model);
    this.testDisplay = this.model;
  }

  onSubmit(clientForm: NgForm) {
    console.log(clientForm.value);
  }
  

  

}

// ClientBindingModel { "name": "", "address": "", "contactname": ""} 