import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, User,
onAuthStateChanged } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

   currentuserstate$:any=null ;
   
  constructor(private auth :Auth) {
    onAuthStateChanged(auth,(user)=>{
      if(user){
      this.currentuserstate$=user.email
      console.log(this.currentuserstate$)
      }else{
        console.log("signed out")
      }
    })
  }
  
  login(username :string ,password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password) //as signInWithEmailAndPassword returns promis we convert it to observable
    )
  }

  logout(){
    return from(this.auth.signOut());
  }

  signup(mail: string, password:string):Observable <any>{
    return from(createUserWithEmailAndPassword(this.auth, mail, password));
  }
}
