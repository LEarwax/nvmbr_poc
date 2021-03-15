import { Component, OnInit } from '@angular/core';

import { Project, IProject } from '../../core/model/project.model';
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
    this.projectService.getProjects().subscribe(data => {
      let projectsJSON = data;
      //@ts-ignore 
      this.projects = projectsJSON; 
    });
  };

  onRowEditInit(projectBindingModel: IProject) {
    let project = new Project(projectBindingModel);
    //@ts-ignore
    this.clonedProjects[project.projectID] = {...project};
  }

  onRowEditSave(projectBindingModel: IProject) {
    let project = new Project(projectBindingModel);

    //@ts-ignore
    delete this.clonedProjects[project.projectID];
    console.log("Project saved: ", project);
    this.projectService.updateProject(project).subscribe(res => {
      console.log("Updated Project: ", res);
    });
  }

  onRowEditCancel(project: Project, index: number) {
    //@ts-ignore
    this.projects[index] = this.clonedProjects[project.projectID];
    //@ts-ignore
    delete this.clonedProjects[project.projectID];
  }
  
}
