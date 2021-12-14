import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'corona-check-bw-frontend';

  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  constructor(private ccService: NgcCookieConsentService){}

  ngOnInit() {
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => { });
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => { });
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(() => { });
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => { });
    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(() => { });
  }

  ngOnDestroy() {
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }

}
