import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // {
  //   path: '', redirectTo: '/dashboard/home', pathMatch: 'full'
  // },
  {path: '', component: HomeComponent},
  {
    path: "dashboard",
    component: HomeComponent,
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule)
  },
  {
    path: "authentication",
    // component: LoginComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
  },

  {
    path: "events",
    loadChildren: () =>
      import("./events/events.module").then((m) => m.EventsModule)
  },
  {
    path: "services",
    loadChildren: () =>
      import("./services/services.module").then((m) => m.ServicesModule)
  },
  {path: "**", component: PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
