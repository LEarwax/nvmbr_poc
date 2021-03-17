import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription, BehaviorSubject } from 'rxjs';
import { filter, share } from 'rxjs/operators';

import { Project } from '../model/project.model';


//TODO: Get this working
@Injectable({
    providedIn: 'root'
})
export class EventManagerService {
    // Observable string sources
    private emitChangeSource = new BehaviorSubject<any>("Default Message");
    // // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // // Service message commands
    constructor() {}
    emitChange(change: any) {
        return this.emitChangeSource.next(change);
    }
}