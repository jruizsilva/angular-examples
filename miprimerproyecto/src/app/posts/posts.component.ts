import { Component, OnInit } from '@angular/core'
import { PostsService } from './posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = []
  comments: any[] = []

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // this.postsService.getPosts().subscribe((posts: any) => {
    //   this.posts = posts
    // })

    // this.postsService.getCommentById(1).subscribe((comments: any) => {
    //   this.comments = comments
    // })

    // this.postsService.insertPost().subscribe((post) => {
    //   console.log(post)
    // })
    this.postsService.posts$.subscribe((res) => {
      console.log(res)
    })
  }

  updatePost() {
    this.postsService.postSource.next('Post actualizado')
  }
}
