import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionType } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isIframe = false;
  loggedIn = false;

  items: MenuItem[] = [];

  private readonly _destroying$ = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private primengConfig: PrimeNGConfig
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    

    this.items = [
      {
          label: 'Projects',
          items: [
            {
              label: 'Create a new project', 
              routerLink: ['/project/form'],
              routerLinkActiveOptions: { exact: true },
              icon: 'pi pi-fw pi-plus'
            },
            {
              label: 'Import projects'
            },
            {
              label: 'Recently view projects',
              routerLink: ['/project/list'],
              routerLinkActiveOptions: { exact: true}
            }
          ]
      },
      {
          label: 'Clients',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Create a new client', 
              routerLink: ['/client/form'],
              routerLinkActiveOptions: { exact: true},
              icon: 'pi pi-fw pi-plus'
            },
            {
              label: 'Import clients'
            },
            {
              label: 'Recently viewed clients',
              routerLink: ['/client/list'],
              routerLinkActiveOptions: { exact: true }
            }
          ]
      }
  ];

    this.isIframe = window !== window.parent && !window.opener;

    this.checkAccount();

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS || msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS),
        takeUntil(this._destroying$)
      )
      .subscribe((result) => {
        this.checkAccount();
      });
  }

  checkAccount() {
    this.loggedIn = this.authService.instance.getAllAccounts().length > 0;
  }

  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest){
        this.authService.loginPopup({...this.msalGuardConfig.authRequest})
          .subscribe(() => this.checkAccount());
        } else {
          this.authService.loginPopup()
            .subscribe(() => this.checkAccount());
      }
    } else {
      if (this.msalGuardConfig.authRequest){
        this.authService.loginRedirect({...this.msalGuardConfig.authRequest});
      } else {
        this.authService.loginRedirect();
      }
    }
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
