import { Component } from '@angular/core';

import { Trial } from './trial';
import { TrialService } from './trial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Becca Does Angular';

  trials: Trial[];

  constructor(
    private trialService: TrialService
  ){ }


}
