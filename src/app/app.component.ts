import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>Learning the {{concept}}</h2>
  <h2>{{getString()}}</h2>
  <h2>{{'This concept is '+getString()}}</h2>
  <h4 title={{title}}>Move here to see the title</h4>
  `,
})
export class AppComponent  { 
  title= 'Angular project';
  concept='Interpolation';
  returnString='Component and template ';
  getString(): string{
    return this.returnString;
  }

}


