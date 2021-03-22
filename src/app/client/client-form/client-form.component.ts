import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Client } from '../../core/model/client.model';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  // @Output() submitFormEvent = new EventEmitter<Client>();

  message?: string;

  
  
  //TODO: find a better solution for dates
  dateCreated?: Date;
  
  //TODO: make this into constant
  statuses: any[] = [{name: 'Active', key: 0}, {name: 'Inactive', key: 1}];

  client: Client = new Client("", "", "", "", "", "", "", "", "");

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.changeData("Hello from Client From");
  }

  handleSubmit() {
    //@ts-ignore
    let formattedDateCreatedMonth = `0${this.dateCreated.getMonth() + 1}`.slice(-2); 
    //@ts-ignore
    let formattedDateCreatedDay = `0${this.dateCreated.getDate()}`.slice(-2);
    //@ts-ignore
    let formattedDateCreated = `${this.dateCreated.getFullYear()}-${formattedDateCreatedMonth}-${formattedDateCreatedDay}`

    this.client.dateCreated = formattedDateCreated;

    this.dataService.changeData(this.client);
  }

}
