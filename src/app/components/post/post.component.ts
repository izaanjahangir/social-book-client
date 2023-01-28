import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PostCommentSectionComponent } from '../post-comment-section/post-comment-section.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openCommentModal() {
    this.modalService.show(PostCommentSectionComponent);
  }
}
