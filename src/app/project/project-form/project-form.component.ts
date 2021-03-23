import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/model/project.model';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project: Project = new Project("", "", "", "", "", false, 0, 0, 0, "", "", "");
  // TODO: Fix these problems papered over with @ts-ignore i.e. the proper way to initialize
  clients?: any[];
  projectManagers?: any[];
  startDate: Date = new Date();
  endDate: Date = new Date();
  binaryOptions?: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.clients = [
        {label: 'Australia', value: 'Australia'},
        {label: 'Brazil', value: 'Brazil'},
        {label: 'China', value: 'China'},
        {label: 'Egypt', value: 'Egypt'},
        {label: 'France', value: 'France'},
        {label: 'Germany', value: 'Germany'},
        {label: 'India', value: 'India'},
        {label: 'Japan', value: 'Japan'},
        {label: 'Spain', value: 'Spain'},
        {label: 'United States', value: 'United States'}
    ];

    // Test data
    this.projectManagers = [
        {label: 'Australia', value: 'Australia'},
        {label: 'Brazil', value: 'Brazil'},
        {label: 'China', value: 'China'},
        {label: 'Egypt', value: 'Egypt'},
        {label: 'France', value: 'France'},
        {label: 'Germany', value: 'Germany'},
        {label: 'India', value: 'India'},
        {label: 'Japan', value: 'Japan'},
        {label: 'Spain', value: 'Spain'},
        {label: 'United States', value: 'United States'}
    ];

    this.binaryOptions = [{label: 'Yes', value: true}, {label: 'No', value: false}];
  }

  handleSubmit() {

    //TODO: Figure out how to init the date object without the error (and ignore)
    
    //@ts-ignore
    let formattedStartMonth = `0${this.startDate.getMonth() + 1}`.slice(-2); 
    //@ts-ignore
    let formattedStartDay = `0${this.startDate.getDate()}`.slice(-2);
    //@ts-ignore
    let formattedStartDate = `${this.startDate.getFullYear()}-${formattedStartMonth}-${formattedStartDay}`

    //@ts-ignore
    let formattedEndMonth = `0${this.endDate.getMonth() + 1}`.slice(-2); 
    //@ts-ignore
    let formattedEndDay = `0${this.endDate.getDate()}`.slice(-2);
    //@ts-ignore
    let formattedEndDate = `${this.endDate.getFullYear()}-${formattedEndMonth}-${formattedEndDay}`

    //@ts-ignore
    this.project.startDate = formattedStartDate;
    //@ts-ignore
    this.project.endDate = formattedEndDate;
    this.project.actualAmount = Number(this.project.actualAmount);
    this.project.budget = Number(this.project.budget);
    this.project.budgetAlertPercentage = Number(this.project.budgetAlertPercentage);

    this.dataService.changeData(this.project);
  }

}
