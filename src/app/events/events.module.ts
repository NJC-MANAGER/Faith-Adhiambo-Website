import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { CharityComponent } from './charity/charity.component';


@NgModule({
  declarations: [
    MentorshipComponent,
    CharityComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
