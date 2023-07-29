import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() koreanWordsInput: Array<any> = [];
  @Output() chosenPictureEmitter: EventEmitter<any> = new EventEmitter();
  chosenPicture: any;

  constructor() { }

  ngOnInit(): void {
    this.chosenPicture = this.koreanWordsInput[0];
    this.reload();
  }

  reload() {
    this.chosenPictureEmitter.emit(this.chosenPicture);
  }
}
