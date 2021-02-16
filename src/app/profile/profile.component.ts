import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

const coreAPIEndpoint = "https://ctlvr-nvmbr-api-appservice.azurewebsites.net";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

type ProfileType = {
  displayName?: String
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;
  
  testData: any;
  weatherData: WeatherForecast[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer  ${sessionStorage.getItem('msal.idtoken')}`
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }

  getTestData() {
    this.http.get(`${coreAPIEndpoint}/api/noauthtest/test`).subscribe(
      (res) => {
        console.log("Response: ", res)
        // this.testData = res;
      }
    )
  }

  // getTestWeatherData() {
  //   this.http.get(`${coreAPIEndpoint}/api/weatherforecast/forecast`, this.httpOptions).subscribe(
  //     (res) => {
        
  //       for (let i = 0; i < res.length; i++) {
  //         let d: WeatherForecast = res[i];
  //         this.weatherData.push(d);
          
  //       }
  //       console.log("Weather: ", this.weatherData);
  //       console.log("Response: ", res);
  //     }
  //   )
  // }
}
