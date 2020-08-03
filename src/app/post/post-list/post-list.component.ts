import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Posts } from 'src/interfaces/posts.model';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  posts: Observable<Posts[]>;

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.commonService.getPosts();
  }

  viewDetail(x: any) {
    this.router.navigateByUrl('/posts/' + x);
  }
}
