import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular_project'; //--> adattag, ha típusosítani szeretnénk, azt így lehet --> 
  titleTyped: string = 'ang...';
  varNumber = 10;
  strNumber = '10';
  myObject : any = {}; //--> muszáj típust adni neki, különben nem tudok elemet beletenni
  myArray : Array<any> = [];


  constructor(){
    console.log(this.strNumber + this.varNumber); // bármilyen sorrendben íratom ki, mindenképpen string összefűzés!
    this.myArray.push(1);
    this.myObject['firstAttribute'] = 'whatever';
  }

  anyFunction(){

  }
}
