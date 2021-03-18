import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/model/project.model';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import { EventManagerService } from '../../core/services/eventManager.service';


@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Output() submitFormEvent = new EventEmitter<Project>();

  // TODO: Fix these problems papered over with @ts-ignore i.e. the proper way to initialize
  
  // Client
  // @ts-ignore
  clients: any[];
  // @ts-ignore
  // TODO: Get two-way binding to work on dropdown select
  selectedClient: string;

  public projectBindingModel?: Project

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
  notes: string = "";
  
  
  // @ts-ignore

  constructor(private http: HttpClient, private eventManager: EventManagerService) { }

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

    //TODO: look at the p-calendar docs to see if this can be formatted
    let formattedStartMonth = `0${this.selectedStartDate.getMonth() + 1}`.slice(-2); 
    let formattedStartDay = `0${this.selectedStartDate.getDate()}`.slice(-2);
    let formattedStartDate = `${this.selectedStartDate.getFullYear()}-${formattedStartMonth}-${formattedStartDay}`

    let formattedEndMonth = `0${this.selectedEndDate.getMonth() + 1}`.slice(-2); 
    let formattedEndDay = `0${this.selectedEndDate.getDate()}`.slice(-2);
    let formattedEndDate = `${this.selectedEndDate.getFullYear()}-${formattedEndMonth}-${formattedEndDay}`


    console.log("Formatted Start Date: ", formattedStartDate);

    //TODO: Form should do error checks 
    let project: Project = {
        billingClient: this.selectedClient,
        name: this.name,
        projectManager: this.selectedProjectManager,
        //TODO: make an option, not a boolean
        status: "active",
        billable: this.selectedBillableOption,
        budget: Number(this.budget),
        budgetAlertPercentage: Number(this.alertPercentage),
        actualAmount: Number(this.actual),
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        notes: this.notes
    };

    console.log("Project in HandleSubmit: ", project);

    // this.projectBindingModel = new Project(project);
    this.eventManager.emitChange(project);
    this.submitFormEvent.emit(project);
  }

}
