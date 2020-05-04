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
  forwardUserData = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  navigate(user: UserModel) {

    this.forwardUserData.emit(user);

    // users/1/posts?idOfUser=1
    this.router.navigate([user.id, 'posts'],
      {
        state: {user},
        queryParams: {idOfUser: user.id},
        // users/:id/posts
        relativeTo: this.activatedRoute
      });
  }

  favorite(user: UserModel) {
    console.log(localStorage.getItem('favorite'));
    console.log(!!localStorage.getItem('favorite'));

    if (!localStorage.getItem('favorite')) {
      const array = [];
      array.push(user);
      localStorage.setItem('favorite', JSON.stringify(array));
    } else {
      const arrayJSON = localStorage.getItem('favorite');
      const array = JSON.parse(arrayJSON);
      array.push(user);
      const value = JSON.stringify(array);
      localStorage.setItem('favorite', value);


    }


  }
}
