import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;
  @Output()
  choosenUser = new EventEmitter();


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    try {
      this.activatedRoute.params.subscribe(value => console.log(value));

      console.log(this.router.getCurrentNavigation().extras.state.user);
      this.user = this.router.getCurrentNavigation().extras.state.user;

    } catch (e) {
      console.log(e);

    }
  }


  chooseUser(user: UserModel) {
    this.choosenUser.emit(user);
  }

  navigate(user: UserModel) {
    this.router.navigate([user.id], {relativeTo: this.activatedRoute, state: {user}, queryParams: {userParam: JSON.stringify(user)}});
  }


}

