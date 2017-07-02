import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Trial } from './trial';

@Injectable()
export class TrialService {
	private headers = new Headers({'Content-Type': 'application/json'});
  	private apiUrl = 'http://api.lillycoi.com/v1/trials?limit=100';  // URL to web api

  	constructor(private http: Http){
  		
  	}

  	getTrials(): Promise<Trial[]>{

		var result = this.http.get(this.apiUrl)
           .toPromise()
           .then(response => response.json().results) 
           .catch(this.handleError);
        // console.log(result);
        return result;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}