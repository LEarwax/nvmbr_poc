import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from '../core/model/project.model';
import { AppConstants } from '../core/constantsAndEnums/constants';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private router: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void { }

  async handleProjectEvent(project: Project) {
    try {
      console.log("Submitted Project: ", project);
      await this.projectService.addProject(project).subscribe(result => {
        console.log("Project request Result: ", result);
      });
    } catch (error) {
      console.log("Handle Project Error: ", error);
    }
  }

}
