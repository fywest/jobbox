import { Component, OnInit } from '@angular/core';

import {Company} from '../company';

@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.scss']
})
export class CompanyregisterComponent implements OnInit {
  company:Company;
  constructor() { }

  ngOnInit() {
    this.company=new Company('nokia','nokia@nokia.com');
  }

  showCompany(){
    console.log(this.company.name+"\n"+this.company.email);
    //alert("here: "+this.company.name);
  }

}
