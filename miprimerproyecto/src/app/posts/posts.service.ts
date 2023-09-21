import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postSource = new Subject<string>()
  posts$ = this.postSource.asObservable()

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getCommentById(commentId: number) {
    const params = {
      commentId
    }
    // return this.http.get(
    //   `https://jsonplaceholder.typicode.com/comments?commentId=${commentId}`
    // )
    return this.http.get(
      `https://jsonplaceholder.typicode.com/comments`,
      { params }
    )
  }

  insertPost() {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      null
    )
  }
}
