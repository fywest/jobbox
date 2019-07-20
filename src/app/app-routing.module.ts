import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { UserregisterComponent } from './userregister/userregister.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'companyregister',component:CompanyregisterComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'user',loadChildren:'./module/user/user.module#UserModule'},
  {path:'job',loadChildren:'./module/job/job.module#JobModule'},
  {path:'company',loadChildren:'./module/company/company.module#CompanyModule'},
  {path:'**',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
