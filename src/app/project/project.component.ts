import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from '../core/model/project.model';
import { AppConstants } from '../core/constantsAndEnums/constants';
import { Subscription } from 'rxjs';

import { EventManagerService } from '../core/services/eventManager.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [EventManagerService],
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  //@ts-ignore
  projectTest: Project;
  

  constructor(
    private http: HttpClient, 
    public router: ActivatedRoute,
    private projectService: ProjectService,
    private eventManagerService: EventManagerService
  ) {
    console.log("Ctor init");
    eventManagerService.changeEmitted$.subscribe(data => {
      console.log("Text from event: ", data);
      this.projectService.addProject(data).subscribe(result => {
        console.log("Project request Result: ", result);
      });
    })
  }

  ngOnInit(): void { }

  ngOnDestroy() {}

  handleProjectEvent(project: Project) {

    try {
      console.log("Submitted Project: ", project);
      this.projectService.addProject(project).subscribe(result => {
        console.log("Project request Result: ", result);
      });
     
    } catch (error) {
      console.log("Handle Project Error: ", error);
    }
  }

}
