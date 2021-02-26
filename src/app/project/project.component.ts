import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from '../core/model/project.model';

const coreAPIEndpoint = "https://ctlvr-nvmbr-api-appservice.azurewebsites.net";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer  ${sessionStorage.getItem('msal.idtoken')}`
    })
  }
  weatherData: WeatherForecast[] = [];

  constructor(
    private http: HttpClient, 
    private router: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getTestData()
  }

  getTestData(): void {
    this.projectService.getTestData().subscribe(data => {
      console.log("Test data: ", data);
    });
  }

  getTestWeatherData() {

    console.log(sessionStorage.getItem('msal.idtoken'));
    
    this.http.get(`${coreAPIEndpoint}/api/weatherforecast/forecast`).subscribe(
      (res) => {
        
        // for (let i = 0; i < res.length; i++) {
        //   let d: WeatherForecast = res[i];
        //   this.weatherData.push(d);
          
        // }
        // console.log("Weather: ", this.weatherData);
        console.log("Response: ", res);
      })
  }

  handleProjectEvent(project: Project) {
    console.log("Project: ", project);
  }

}
