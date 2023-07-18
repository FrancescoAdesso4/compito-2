import { Component } from '@angular/core';
import { Streaming } from './model/streaming.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  
  
  data:Streaming;
  oStreaming:Observable<Streaming>
  url="https://my-json-server.typicode.com/PaoloCarugati/strumentimusicali/db";
  spartiti: any;

  constructor(public http:HttpClient){
    this.oStreaming=http.get<Streaming>(this.url);
    this.oStreaming.subscribe(d=>this.data = d);
  }

  stampArray() {
    this.spartiti.sort((a, b) => a.prezzo - b.prezzo);
  }

  
}
