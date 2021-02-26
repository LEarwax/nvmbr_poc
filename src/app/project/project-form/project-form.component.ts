import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/model/project.model';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

@Output() projectEvent = new EventEmitter<Project>();

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
  selectedStatusOption: boolean = false;
  selectedBillableOption: boolean = false;
  
  // Dates
  // @ts-ignore
  selectedStartDate: Date;
  // @ts-ignore
  selectedEndDate: Date;
  
  budget: number = 0;
  actual: number = 0;
  alertPercentage: number = 0;
  description: string = "";
  
  
  // @ts-ignore

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

    
    this.binaryOptions = [{label: 'Yes', value: true}, {label: 'No', value: false}];
    
  }

  handleSubmit() {
    let project: Project = {
        client: this.selectedClient,
        name: this.name,
        projectManager: this.selectedProjectManager,
        status: this.selectedStatusOption,
        billable: this.selectedBillableOption,
        startDate: this.selectedStartDate,
        endDate: this.selectedEndDate,
        budget: this.budget,
        actual: this.actual,
        alertPercentage: this.alertPercentage
    };
    
    console.log("Submitted Project: ", project);

    this.projectEvent.emit(project);
  }

}
