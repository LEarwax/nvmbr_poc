import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


import { Client } from '../core/model/client.model';

const CLIENT_STATUS = {
  active: "active",
  inactive: "inactive"
}

const coreAPIEndpoint = "https://ctlvr-nvmbr-api-appservice.azurewebsites.net";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  testData: any;
  
  clientModel: Client = new Client("", "", "", "", "", CLIENT_STATUS.inactive);

  // clients: Client[] = [];
  clients: string[] = ["client1", "client2", "client3", "client4"];

  list: String[];
  selected: string = "";

  constructor(private http: HttpClient) { 
    this.list = ["1", "2", "3"];
  }

  ngOnInit(): void { 
    this.getTestData();
  }

  getTestData() {
    this.http.get(`${coreAPIEndpoint}/api/noauthtest/test`).subscribe(
      (res) => {
        console.log("Response: ", res)
        this.testData = res;
      }
    )
  }
  onSubmit(clientForm: NgForm) {
    console.log(clientForm.value);
    // this.clientModel = clientForm.value;

    // let client = new Client(
    //   this.clientModel.name,
    //   this.clientModel.address,
    //   this.clientModel.contactName,
    //   this.clientModel.notes,
    //   this.clientModel.history,
    //   this.clientModel.status
    // );

    // this.clients.push(client);

    // try {
    //   this.http.post(`${coreAPIEndpoint}/api/clients`, client)
    //       .subscribe(result => {
    //         console.log("Results: ", result);
    //       });
    // } catch (error) {
      
    // }
  }

}

// ClientBindingModel { "name": "", "address": "", "contactname": ""} 