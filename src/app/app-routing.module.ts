import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
    ],
    children: [
      {
        path: 'form',
        component: ProjectFormComponent,
        canActivate: [
              MsalGuard
            ]
        }
    ]
  },
  //TODO: make this a child route
  // {
  //   path: 'project/projectForm',
  //   component: ProjectFormComponent,
  //   canActivate: [
  //     MsalGuard
  //   ]
  // },
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent
  },
  // TODO: Fallback route, either keep home component or provide another component (PageNotFound, etc)
  {
    path: "**",
    redirectTo: '/',
    pathMatch: 'full'
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
