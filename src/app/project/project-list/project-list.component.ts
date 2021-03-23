import { Component, OnInit, SimpleChanges } from '@angular/core';

import { Project } from '../../core/model/project.model';
import { ProjectService } from '../../project/project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  providers: [],
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects?: Project[];
  clonedProjects: { [s: string]: Project; } = {};

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void { 
    this.projectService
        .getProjects()
        .subscribe(data => {
          let projectsJSON = data;
          //@ts-ignore 
          this.projects = projectsJSON; 
          console.log("Projects: ", this.projects)
    });
  };

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  onRowEditInit(project: Project) {
    this.clonedProjects[project.projectID] = {...project};
  }

  onRowEditSave(project: Project) {
    delete this.clonedProjects[project.projectID];
    this.projectService
        .updateProject(project)
        .subscribe(res => {
          console.log("Updated Project: ", res);
    });
  }

  onRowEditCancel(project: Project, index: number) {
    //@ts-ignore
    this.projects[index] = this.clonedProjects[project.projectID];
    delete this.clonedProjects[project.projectID];
  }
  
}
