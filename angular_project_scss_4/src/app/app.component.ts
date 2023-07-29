import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_project_scss_4';
  page = 'main';
  
changePage(selectedPage: string) {
  this.page = selectedPage;
}
}
