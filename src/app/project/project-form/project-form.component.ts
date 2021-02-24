import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/model/project.model';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectModel: Project = new Project("", "", false, new Date(), 0, 0, 0, 0); 

  selectedClient: string = "";

  // @ts-ignore
  clients: any[];
  // @ts-ignore
  projectManagers: any[];
  // @ts-ignore
  selectedClient: any;
  selectedProject: any;
  billableOptions: any[] = [];
  billableValue: string = "off"; 
  // @ts-ignore
  startDate: Date;
  // @ts-ignore
  endDate: Date;
  statusOptions: any[] = [];
  statusValue: string = "off"; 
  // @ts-ignore
  value1: string;
  // @ts-ignore
  date1: Date;
  // @ts-ignore
  name: string;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
    // Test Data
    this.clients = [
      {
          name: 'Client1',
          code: 'AU',
          states: [
              {
                  name: 'New South Wales',
                  cities: [
                      {cname: 'Sydney', code: 'A-SY'},
                      {cname: 'Newcastle', code: 'A-NE'},
                      {cname: 'Wollongong', code: 'A-WO'}
                  ]
              },
              {
                  name: 'Queensland',
                  cities: [
                      {cname: 'Brisbane', code: 'A-BR'},
                      {cname: 'Townsville', code: 'A-TO'}
                  ]
              },
              
          ]
      },
      {
          name: 'Client2', 
          code: 'CA',
          states: [
              {
                  name: 'Quebec',
                  cities: [
                      {cname: 'Montreal', code: 'C-MO'},
                      {cname: 'Quebec City', code: 'C-QU'}
                  ]
              },
              {
                  name: 'Ontario',
                  cities: [
                      {cname: 'Ottawa', code: 'C-OT'},
                      {cname: 'Toronto', code: 'C-TO'}
                  ]
              },
              
          ]
      },
      {
          name: 'Client3',
          code: 'US',
          states: [
              {
                  name: 'California',
                  cities: [
                      {cname: 'Los Angeles', code: 'US-LA'},
                      {cname: 'San Diego', code: 'US-SD'},
                      {cname: 'San Francisco', code: 'US-SF'}
                  ]
              },
              {
                  name: 'Florida',
                  cities: [
                      {cname: 'Jacksonville', code: 'US-JA'},
                      {cname: 'Miami', code: 'US-MI'},
                      {cname: 'Tampa', code: 'US-TA'},
                      {cname: 'Orlando', code: 'US-OR'}
                  ]
              },
              {
                  name: 'Texas',
                  cities: [
                      {cname: 'Austin', code: 'US-AU'},
                      {cname: 'Dallas', code: 'US-DA'},
                      {cname: 'Houston', code: 'US-HO'}
                  ]
              }
          ]
      }];
      
    // Test data
    this.projectManagers = [
        {
            name: 'Project1',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },
                
            ]
        },
        {
            name: 'Project2', 
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },
                
            ]
        },
        {
            name: 'Project3',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
      }];
  
      
    


    
    this.billableOptions = [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}];
    this.statusOptions = [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}];
  }

  handleClientSelect(client: string) {
    this.selectedClient = client;
  }

  handleProjectSelect(client: string) {
    this.selectedProject = client;
  }

    // this.countries = 

  onSubmit() {
    try {
      
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

    } catch (error) {
      
    }
  }

}
