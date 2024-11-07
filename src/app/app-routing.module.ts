import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard/home', pathMatch: 'full'
  },
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
  {path: "footer", component: FooterComponent},
  {path: "navbar", component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
