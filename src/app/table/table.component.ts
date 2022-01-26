import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.groupme.com/v3/groups/51640884/messages?token=36LyDHoM6ozGt4NgZFpsU5hhWIbbGJFl3bqtuECe&limit=100').toPromise().then(val => console.log(val))
  }

}
