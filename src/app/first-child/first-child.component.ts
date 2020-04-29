import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(private dataService: DataService) {
    dataService.getStaet().subscribe(value => console.log(value));
  }

  ngOnInit() {
  }

  doNewState() {
    this.dataService.setState('hello form first component');
  }

  hello() {
    console.log('hello');
  }
}
