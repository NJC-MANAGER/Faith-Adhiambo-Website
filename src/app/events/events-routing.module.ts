import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityComponent } from './charity/charity.component';
import { MentorshipComponent } from './mentorship/mentorship.component';

const routes: Routes = [
  { path: "charity", component: CharityComponent },
  { path: "mentorship", component: MentorshipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
