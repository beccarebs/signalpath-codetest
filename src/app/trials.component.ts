import { Component, OnInit } from '@angular/core';

import { Trial } from './trial';
import { TrialService } from './trial.service';

@Component({
	selector: 'all-trials',
	templateUrl: './trials.component.html',
	styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit{
	trials: Trial[];

	constructor(
		private trialService: TrialService
	){ }

	getTrials(): void{
		this.trialService
			.getTrials()
			.then(trials => this.trials = trials);
	}

	ngOnInit(): void{
		this.getTrials();
	}
}
