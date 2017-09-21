import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../userService/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetInactive(id: number, activeStatus: boolean) {
    this.userService.setActive(id, activeStatus);
  }
}
