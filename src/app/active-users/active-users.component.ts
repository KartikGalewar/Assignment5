import { Component } from '@angular/core';
import { UserService } from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
   users: string[]=this.userService.activeUsers;
 // @Output() userSetToInactive = new EventEmitter<number>();
    
  constructor(private userService:UserService){

  }


  onSetToInactive(id: number) {
     this.userService.setToInActive(id);
  }
}
