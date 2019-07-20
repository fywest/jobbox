import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './module/job/job.component';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ListComponent } from './module/job/components/list/list.component';
import { ProfileComponent } from './module/job/components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    CompanyregisterComponent,
    UserregisterComponent,
    ListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
