import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../../core/model/client.model';



@Injectable()
export class DataService {
    private dataSource = new BehaviorSubject('Default Message');
    currentData = this.dataSource.asObservable();

    constructor() { }

    changeData(payload: any) {
        this.dataSource.next(payload);
    }

    
}