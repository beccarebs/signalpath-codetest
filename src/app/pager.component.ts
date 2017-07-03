import { Component } from '@angular/core';

import { Trial } from './trial';
import { TrialService } from './trial.service';

import {Router} from '@angular/router';
 
@Component({
  selector: 'pagination-pager',
  templateUrl: './pager.component.html'
})
export class DemoPaginationPagerComponent {
	trials: Trial[];

	constructor(
		private trialService: TrialService
	){ }

	getNewTrials(offset, pageID): void{
	    this.trialService
	      .getNewTrials(offset)
	      .then(trials => this.trials = trials);
	}

  	public totalItems:number = 100000;
  	public currentPage:number = 1;
  	public smallnumPages:number = 0;

	public pageChanged(event:any):void {
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);

		var pageID = event.page;
		var offset = pageID * 100-100;
		// console.log('offset: ' + offset);
		
		this.getNewTrials(offset, pageID);
		
	}
}