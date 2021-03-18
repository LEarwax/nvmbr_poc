import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ClientService } from './client.service';
import { Location } from '@angular/common';
import { ROUTES } from '../core/constantsAndEnums/constants';

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
  
  currentHash: string;
  routes: Object;

  // clients: Client[] = [];
  clients: string[] = ["client1", "client2", "client3", "client4"];

  list: String[];
  selected: string = "";

  constructor(private clientService: ClientService, location: Location) { 
    this.list = ["1", "2", "3"];
    this.currentHash = "";
    this.routes = ROUTES;

    
  }

  ngOnInit(): void { 
    
  }

  ngAfterViewInit(): void {
    this.currentHash = location.hash;
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