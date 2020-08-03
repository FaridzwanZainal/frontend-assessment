import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../../interfaces/posts.model';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.postsUrl}`);
  }

  getPost(id: number): Observable<Posts> {
    return this.http.get<Posts>(`${this.postsUrl}/${id}`);
  }
  getCommentByID(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentUrl}?postId=${id}`);
  }
}
