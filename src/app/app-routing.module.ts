import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
