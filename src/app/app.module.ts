import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoronaFormularComponent } from './components/corona-formular/corona-formular.component';
import { FormsModule } from '@angular/forms';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'corona-checker-bw.de'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#ffcc01'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
  content:{
    allow: 'Akzeptieren',
    deny: 'Ablehnen',
    message: 'Um Ihnen die bestmögliche Benutzererfahrung zu bieten, verwenden wir Cookies.',
    link: 'Mehr dazu.'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    CoronaFormularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
