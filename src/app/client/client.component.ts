import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ClientService } from './client.service';

import { Client } from '../core/model/client.model';

const CLIENT_STATUS = {
  active: "active",
  inactive: "inactive"
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  
  

  // clients: Client[] = [];
  clients: string[] = ["client1", "client2", "client3", "client4"];

  list: String[];
  selected: string = "";

  constructor(private clientService: ClientService) { 
    this.list = ["1", "2", "3"];
  }

  ngOnInit(): void { 
    
  }
  
  handleSubmitForm(event: Client) {
    let client = event;
    try {
      this.clientService.addClient(client).subscribe(res => {
        console.log("Add Client: ", res);
      });
    } catch (error) {
      
    }
  }

}