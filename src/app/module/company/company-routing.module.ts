import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CompanyComponent } from './company.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'',component:CompanyComponent},
  {path:'list',component:ListComponent},
  {path:'profile',component:ProfileComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
