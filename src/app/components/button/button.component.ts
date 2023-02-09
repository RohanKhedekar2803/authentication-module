import { Component,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text !: string;
  @Input() id !: string;
  @Input() link !:string;
  constructor(private router:Router){};
  
   hasroute(url :string){
    return this.router.url===url;
   }
}
