import { Component, OnInit } from '@angular/core';

import {User} from '../user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {


  user:User;
  constructor(
  ) { 

  }
  

  ngOnInit() {
    this.user=new User('lee','lee@mail.com')
  }

  showUser(){
    console.log(this.user.name+"\n"+this.user.email);
    //alert("here: "+this.user.name);
  }

}
