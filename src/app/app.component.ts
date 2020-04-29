import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FirstChildComponent} from './first-child/first-child.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('target', {static: false})
  target;
  @ViewChild(FirstChildComponent, {static: false})
  firstChild: FirstChildComponent;


  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.target.nativeElement.innerText);

    console.log(this.firstChild);
    this.firstChild.hello();

  }


}
