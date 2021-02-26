import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Project } from '../core/model/project.model';
import { AppConstants } from '../core/constantsAndEnums/constants';


@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private headers: any;
    private _baseURL: string;

    constructor(private _http:HttpClient) {
        this.headers = new HttpHeaders().set('content-type', 'applicatoin/json');
        this._baseURL = AppConstants.baseURL;
    }
    
    getTestData() {
        return this._http.get(`${this._baseURL}/api/noauthtest/test`, (this.headers));
    }

    addProject(project: Project) {
        return this._http.post(`${this._baseURL}/project`, project,(this.headers));
    }
}