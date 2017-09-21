import {Component, OnInit} from '@angular/core';
import {UserService} from './userService/user.service';
import {CounterService} from './counterService/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inActiveUsers = [];

  constructor(private userService: UserService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inActiveUsers = this.userService.inactiveUsers;
  }

  onGetLog() {
    this.counterService.logCounters();
  }
}
