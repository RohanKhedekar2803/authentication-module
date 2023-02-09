import { Component , Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebtn',
  templateUrl: './deletebtn.component.html',
  styleUrls: ['./deletebtn.component.css']
})
export class DeletebtnComponent {
  constructor(private router:Router){}
  @Output() logoutemit=new EventEmitter;
  @Output() profileemit=new EventEmitter;
  hasroute(url :string){
    return this.router.url===url;
   }
   logouttrig(){
     this.logoutemit.emit();
   }
   profiletrig(){
    this.profileemit.emit();
   }
}
