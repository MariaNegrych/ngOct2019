import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private state = new BehaviorSubject('default');

  constructor() {
  }

  getStaet() {
    return this.state;
  }

  setState(state) {
    this.state.next(state);

  }
}
