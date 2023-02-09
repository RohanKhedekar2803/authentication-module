import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  arr = new Array<any>();
  person='';
  constructor(private autorizationservice :AuthorizationService,private router : Router){
    this.person=this.autorizationservice.currentuserstate$;
  }
  ngOnInit(){
 
  }
  hasroute(route : string){
    
    return route===this.router.url;
  }
  logout(){
    this.autorizationservice.logout();
    this.router.navigate(['/'])
  }
   
  signup(){
    this.router.navigate(['/signup'])
  }

  profilenav(){
    this.router.navigate(['/profile'])
  }
}
