import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Client  } from '../../core/model/client.model';
import { ClientService } from '../client.service';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Input() clientData = [];
  @Output() editClientEvent = new EventEmitter<Client>();

  clients?: Client[];
  clonedClients: { [s: string]: Client; } = {};

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService
        .getClients()
        .subscribe((data: any) => {
          this.clients = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void { 
    let clientData = changes.clientData.currentValue;
    if (typeof(clientData) === 'undefined') {
      return;
    }
    this.clients = clientData;
  }

  onRowEditInit(client: Client) {
    this.clonedClients[client.clientID] = {...client};
  }

  onRowEditSave(client: Client) {
    delete this.clonedClients[client.clientID];
    this.clientService
        .updateClient(client)
        .subscribe(res => {
          console.log("Updated Client: ", res);
    });
  }

  onRowEditCancel(client: Client, index: number) {
    //@ts-ignore
    this.clients[index] = this.clonedClients[client.clientID];
    delete this.clonedClients[client.clientID];
  }

}
