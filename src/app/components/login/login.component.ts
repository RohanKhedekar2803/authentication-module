import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   mail : string='';
   password :string='';

   constructor(private authnticationsservice : AuthorizationService, private router :Router,
    private toast :HotToastService){}
  
   OnSubmit(): any{
    if(this.mail ==='' || this.password ===''){
      alert('enter all feilds');
    }else{
       this.authnticationsservice.login(this.mail,this.password)
       .pipe(this.toast.observe({
        success : 'Done',
        loading :'loading....',
        error : 'error!'
       }))
       .subscribe(()=>{
         this.router.navigate(['/home'])
       })
    }
    
   }
}
