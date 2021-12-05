import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoronaFormularComponent } from './corona-formular/corona-formular.component';

@NgModule({
  declarations: [
    AppComponent,
    CoronaFormularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
