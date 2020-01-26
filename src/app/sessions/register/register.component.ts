import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // scenario
  // for a user to be ablee to login he / she needs cridentials to access it
  // In my case it should be handled by one person
  // i think the head should be able to take care of it for the whole hospital

}
