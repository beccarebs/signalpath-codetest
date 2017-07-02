import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { TrialsComponent } from './trials.component';
import { TrialService } from './trial.service';

@NgModule({
  declarations: [
    AppComponent,
    TrialsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ TrialService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
