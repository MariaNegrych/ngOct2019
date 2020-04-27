import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {


  // state: { login: string, pass: string } = {
  //   login: 'login',
  //   pass: 'pass',
  // };

  // loginForm: { login: string, password: string } = {
  //   login: 'def login',
  //   password: 'def pass'
  // };


  forma: FormGroup;

  // password: FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);
  //
  // constructor() {
  //   this.forma = new FormGroup({
  //     login: new FormControl('', [Validators.required, Validators.maxLength(10), , (control) => {
  //       console.log(control);
  //       if (control.value.length < 2) {
  //         return {customError: true};
  //       }
  //     }]),
  //     password: this.password
  //   });
  // }
  //
  // // changeState(xxx: HTMLInputElement) {
  // //   console.log(xxx.value);
  // //   this.state = xxx.value;
  // // }
  //
  //
  // checkState(forma: FormGroup) {
  //   console.log(forma);
  //
  // }


  constructor(private formBuilder: FormBuilder) {
    this.forma = formBuilder.group({
      login: ['', [Validators.required, Validators.pattern('[a-z]{6,}')]],
      password: ['', [Validators.required, Validators.]]
    });
  }
}

