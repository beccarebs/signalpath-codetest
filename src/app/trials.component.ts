import { Component, OnInit } from '@angular/core';

import { Trial } from './trial';
import { TrialService } from './trial.service';

import { Router } from '@angular/router';

@Component({
	selector: 'all-trials',
	templateUrl: './trials.component.html',
	styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
	trials: Trial[];

	constructor(
		private trialService: TrialService,
    private router: Router
	) { }

	getTrials(): void {
		this.trialService
			.getTrials()
			.then(trials => this.trials = trials);
	}

  getNewTrials(offset, pageID): void {
    this.trialService
      .getNewTrials(offset)
      .then(trials => this.trials = trials);
  }

	ngOnInit(): void {
		this.getTrials();

    this.router.routerState.root.queryParams.subscribe((params) => {
      //check page parameter is here
      if (params['page']) {
        var pageID = params['page'];
        var offset = pageID * 100 - 100;

        this.getNewTrials(offset, pageID);
      } else {
        // console.log('page not found in params')
      }
    });
	}
}
