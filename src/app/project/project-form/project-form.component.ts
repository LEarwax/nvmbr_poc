import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/model/project.model';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

@Output() newProjectEvent = new EventEmitter<Project>();

  projectModel: Project = new Project("", "", false, new Date(), 0, 0, 0, 0); 


  // TODO: Fix these problems papered over with @ts-ignore i.e. the proper way to initialize
  
  // Client
  // @ts-ignore
  clients: any[];
  // @ts-ignore
  // TODO: Get two-way binding to work on dropdown select
  selectedClient: string;

  // Name
  name: string = "";

  // Project Manager
  // @ts-ignore
  projectManagers: any[];
  selectedProjectManager: any;

  // @ts-ignore
  binaryOptions: any[];
  selectedStatusOption: string = "no";
  selectedBillableOption: string = "no";
  
  // Dates
  // @ts-ignore
  selectedStartDate: Date;
  // @ts-ignore
  selectedEndDate: Date;
  
  // @ts-ignore
  value1: string;
  // @ts-ignore
  date1: Date;
  
  
  // @ts-ignore
  countries: any[];

  constructor(private http: HttpClient) { }

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

    
    this.binaryOptions = [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}];
    
  }


  // TODO: Figure out how to get two-way binding to work with dropdown
  handleClientSelect(event: any) {
    this.projectModel.client = event.value
  }


  

  onSubmit() {
    
      let project = new Project(
        this.projectModel.client,
        this.projectModel.name,
        this.projectModel.billable,
        this.projectModel.startDate,
        this.projectModel.status,
        this.projectModel.budgetAmount,
        this.projectModel.actualAmount,
        this.projectModel.budgetThresholdPercentage,
        this.projectModel.description,
        this.projectModel.endDate,
        this.projectModel.projectManger
      );

      localStorage.set(project.name, project);
      let check = localStorage.getItem(project.name);
      console.log("Project: ", check);

    
  }

}
