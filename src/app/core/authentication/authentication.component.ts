import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {

  sample=  null;

  constructor(private logIn: AuthService) { }

  ngOnInit() {
    this.logIn.userAuth().subscribe(res => this.sample = res);

    // this.logIn.getMessage('2463').subscribe((res) => {
    //   console.log(res);
    // });

    const testMessage = {
      content: 'Hello!',
      submittedBy: 'Josh'
    };
    // this.logIn.createMessage(testMessage).subscribe((res) => {
    //   console.log(res);
    // });
  }

}
