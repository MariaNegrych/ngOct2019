import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {

  form: FormGroup;

  todos: Todo[] = [];
  private http: HttpClient;
  constructor(private fb: FormBuilder) {


    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: ['', Validators.required]

    });
  }


  save() {

    this.todos.push(this.form.value);

  }
}
