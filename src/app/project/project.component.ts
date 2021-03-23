import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from '../core/model/project.model';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [DataService],
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  //@ts-ignore
  projectTest: Project;

  constructor(
    private http: HttpClient, 
    public router: ActivatedRoute,
    private projectService: ProjectService,
    private dataService: DataService
  ) { }

  //TODO: Unsub to observable
  ngOnInit(): void {
    this.dataService
        .currentData
        .subscribe(project => {
          this.addProject(project);
    });
  }

  ngOnDestroy() {}

  addProject(newProject: any) {
    console.log("New Project: ", newProject);
    this.projectService
        .addProject(newProject)
        .toPromise()
        .then(res => {
          console.log("Add Project: ", res);
    });
  }

}
