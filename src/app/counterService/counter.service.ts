export class CounterService {
  activeToInActiveCntr = 0;
  inActiveToActiveCntr = 0;

  logCounters() {
    console.log('Active to inactive counter: ' + this.activeToInActiveCntr + '\n' +
      'Inactive to active counter:' + this.inActiveToActiveCntr
    );

  }
}
