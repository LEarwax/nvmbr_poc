import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ClientService } from './client.service';
import { Location } from '@angular/common';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ROUTES } from '../core/constantsAndEnums/constants';
import { DataService } from '../core/services/data.service';

import { Client } from '../core/model/client.model';

const CLIENT_STATUS = {
  active: "active",
  inactive: "inactive"
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [DataService]
})
export class ClientComponent implements OnInit {
  newClient?: any;

  constructor(
    private clientService: ClientService, 
    private dataService: DataService
  ) { }

  ngOnInit(): void { 
    this.dataService
        .currentData
        .subscribe(client => {
          this.addClient(client);
        });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log("Client Comp Changes: ", changes.newClient);

  }

  addClient(newClient: any) {
    this.clientService
        .addClient(newClient)
        .toPromise()
        .then(res => {
          console.log("Response: ", res);
        });
  }

}