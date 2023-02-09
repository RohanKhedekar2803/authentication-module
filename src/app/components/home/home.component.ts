import { Component } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  person:any='';
  constructor(private authservice : AuthorizationService,private auth :Auth){
    this.person=this.authservice.currentuserstate$;
    console.log(this.person)
}
      
}
