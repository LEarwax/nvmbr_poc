import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Client } from '../core/model/client.model';
import { AppConstants } from '../core/constantsAndEnums/constants';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private headers: any;
    private _baseURL: string;

    constructor(private _http:HttpClient) {
        this.headers = new HttpHeaders().set('content-type', 'application/json');
        this._baseURL = AppConstants.baseURL;
    }

    getClient(id: string) {
        return this._http.get(`${this._baseURL}/api/clients/${id}`, (this.headers));
    }

    //TODO: get these models right
    getClients() {
        return this._http.get<Client[]>(`${this._baseURL}/api/clients`, (this.headers));
    }

    addClient(client: Client) {
        return this._http.post(`${this._baseURL}/api/clients`, client, (this.headers));
    }

    updateClient(client: Client) {
        return this._http.put(`${this._baseURL}/api/clients/${client.clientID}`, client, (this.headers));
    }
}