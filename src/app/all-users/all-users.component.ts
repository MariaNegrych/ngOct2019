import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];

  xxx: any;


  constructor(private activatedRoute: ActivatedRoute, private userService) {
    console.log(this.activatedRoute.snapshot.data);
    this.users = this.activatedRoute.snapshot.data.allUsers;
  }

  ngOnInit() {
  }

  catchUserData(user: any) {
    console.log(user);
    this.xxx = user;
  }
}
