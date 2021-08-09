import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Comment, CommentUpdate, User} from '../../model';

@Component({
  selector: 'mac-comments',
  templateUrl: './comments.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {

  @Input() user: User;
  @Input() comments: Comment[];

  @Output() outUpdateComment = new EventEmitter<CommentUpdate>();
  @Output() outCreateComment = new EventEmitter<Comment>();

  @ViewChild('commentContentEditable', {static: false}) commentContentEditable: ElementRef;

  createComment() {
    this.outCreateComment.emit({
      user: this.user,
      time: +new Date(),
      content: this.commentContentEditable.nativeElement.textContent
    });
    this.commentContentEditable.nativeElement.textContent = '';
  }


  updateComment(index: number, comment: Comment) {
    this.outUpdateComment.emit({
      index, comment
    });
  }

}
