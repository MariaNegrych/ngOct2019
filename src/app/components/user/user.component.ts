import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private dataService: DataService) {
    dataService.state.subscribe(value => this.user = value);
  }

  ngOnInit() {
  }

}
