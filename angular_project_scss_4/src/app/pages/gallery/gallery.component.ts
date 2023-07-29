import { Component } from '@angular/core';
import { KoreanFor } from '../../shared/constants/constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(){};
  koreanWords: Array<any> = KoreanFor;
  chosenPicture: any;
  
  loadPicture(chPic: any){
    this.chosenPicture = chPic;
  }
}
