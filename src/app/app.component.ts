import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Becca Does Angular';
  // private apiUrl = 'http://api.lillycoi.com/v1/trials?limit=100';
  // data: any = {};

  // constructor(private http: Http) {
  // 	this.getTrials();
  // 	this.getData();
  // }

  // getData() {
  // 	return this.http.get(this.apiUrl)
  // 		.map((res: Response) => res.json())
  // }

  // getTrials() {
  // 	this.getData().subscribe(data => {
  // 		console.log(data);
  // 		this.data = data;
  // 	})
  // }
}
