import { Component , Input} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service'
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
@Input() name :string='';
@Input() mail :string='';
@Input() password :string='';
@Input() repassword :string='';
  data : any;

    constructor(private authservice : AuthorizationService,
      private toast :HotToastService, private router : Router){}
    OnSubmit(){
      if(this.name ==='' || this.mail==='' || this.password==='' || this.repassword===''){
        alert('please fill required feilds');
        return;
      }
      if(this.password !== this.repassword){
        alert('Password didnt match');
        this.password='';
        this.repassword='';
        return;
      }else{
        this.authservice.signup(this.mail,this.password)
          .pipe(this.toast.observe({
            success : 'Done',
            loading :'loading....',
            error : ({message})=>`${message}`
           })).subscribe((e)=>
            {this.data=e;console.log(e);
            this.router.navigate(['/home']);}
           )
      }
    }
}
