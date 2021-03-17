import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Client, IClient } from '../../core/model/client.model';



@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Output() submitFormEvent = new EventEmitter<Client>();

  //TODO: make this into constant

  

  statuses: any[] = [{name: 'Active', key: 0}, {name: 'Inactive', key: 1}];

  client: IClient = new Client("", "", "", "", "", "", "", "", "");

  constructor() { }

  ngOnInit(): void {
    
  }

  handleSubmit() {
    console.log("Client Binding Model: ", this.client);

    //@ts-ignore
    let formattedDateCreatedMonth = `0${this.client.dateCreated.getMonth() + 1}`.slice(-2); 
    //@ts-ignore
    let formattedDateCreatedDay = `0${this.client.dateCreated.getDate()}`;
    //@ts-ignore
    let formattedDateCreated = `${this.client.dateCreated.getFullYear()}-${formattedDateCreatedMonth}-${formattedDateCreatedDay}`

    let newClient = new Client(
      "",
      //TODO: Fix this error
      //@ts-ignore
      this.client.name,
      formattedDateCreatedDay,
      this.client.status,
      this.client.email,
      this.client.website,
      this.client.phone,
      this.client.fax,
      this.client.description
    );

    this.submitFormEvent.emit(newClient);
  }

}
