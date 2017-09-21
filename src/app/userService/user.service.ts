import {CounterService} from '../counterService/counter.service';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  setActive(id: number, active: boolean) {
    if (active) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counterService.inActiveToActiveCntr++;
    } else {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.activeToInActiveCntr++;
    }
  }
}
