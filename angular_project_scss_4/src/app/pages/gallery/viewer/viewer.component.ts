import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() pictureIdInput: any;

  commentObject: any = { username: "", comment: "" };
  comments: Array<any> = [];

  ngOnInit(): void { }

  addComment() {
    if (this.commentObject.username && this.commentObject.comment) {
      this.commentObject.date = new Date();
      //spread operator
      //this.comments.push(...this.commentObject);
      //object assign
      this.comments.push(Object.assign({}, this.commentObject));
      this.commentObject = {};
    }
  }
}
