import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';

import { JobComponent } from './job.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [JobComponent,ListComponent,ProfileComponent],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
