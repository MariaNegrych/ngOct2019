import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  msg = 'users';

  favorites: any[];

  constructor() {


  }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorite'));

  }


  clearLS() {
    localStorage.clear();
  }
}
