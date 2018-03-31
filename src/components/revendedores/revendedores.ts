import { Component } from '@angular/core';


@Component({
  selector: 'revendedores',
  templateUrl: 'revendedores.html'
})
export class RevendedoresComponent {

  text: string;

  constructor() {
    console.log('Hello RevendedoresComponent Component');
    this.text = 'Hello World';
  }

}
