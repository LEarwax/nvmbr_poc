import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const coreAPIEndpoint = "https://ctlvr-nvmbr-api-appservice.azurewebsites.net";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  testData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  getTestData() {
    this.http.get(`${coreAPIEndpoint}/api/noauthtest/test`).subscribe(
      (res) => {
        console.log("Response: ", res)
        this.testData = res;
      }
    )
  }

}
