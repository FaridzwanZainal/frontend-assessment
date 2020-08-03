import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Posts } from 'src/interfaces/posts.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  post: Observable<Posts>;
  comments: any;
  id: number;
  input = '';

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.post = this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = Number(params.get('id'));
        return this.commonService.getPost(this.id);
      })
    );
  }

  viewComments(id: number) {
    this.comments = this.commonService.getCommentByID(id);
  }
}
