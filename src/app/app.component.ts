import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {


  constructor(private router: Router) {
  }

  // на главной компоненте сделать форму с инпутом, в него нужно вводить id юзера.
  // По этому id ваш сервис обращяется к jsonplaceholder и достает конкретного юзера делая переход по роуту и показывая
  // его на отдельной странице. Сделать gurad который позволит запретить переход если такого id юзера ,который вы ввели, не существует.
  // Создать DataService, в который записывать всех юзеров, которых вы выбирали по номеру.


  chooseUser(ref: HTMLInputElement) {
    console.log(ref.value);
    this.router.navigate(['user', ref.value]);

  }
}
