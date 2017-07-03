import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TrialsComponent } from './trials.component';
import { TrialService } from './trial.service';
import { PaginationModule } from 'ngx-bootstrap';
import { DemoPaginationPagerComponent } from './pager.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialsComponent,
    DemoPaginationPagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'trials',
        component: TrialsComponent
      }
    ]),
    PaginationModule.forRoot()
  ],
  providers: [ TrialService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
