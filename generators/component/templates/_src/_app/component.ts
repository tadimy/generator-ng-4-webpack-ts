import {Component} from '@angular/core';

@Component({
  selector: '<%= componentName %>',
  templateUrl: '<%= componentName %>.component',
  styleUrls: ['./<%= componentName %>.scss']
})
export class <%= className %> {
  public text: string;
  constructor() {
    this.text = 'My brand new component!';
  }
}
