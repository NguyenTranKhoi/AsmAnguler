import { Component, OnInit } from '@angular/core';
import { Iposts } from 'src/app/models/posts';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  postList!: Iposts[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.showPosts();
  }

  showPosts() {
    this.postService.getPosts().subscribe(data => {
      this.postList = data
    })
  }
  onRemovePost(id: number) {
    const confirm = window.confirm("Bạn có chắc muốn xoá không ?");
    if (confirm) {
      this.postService.removePost(id).subscribe(() => {
        this.postList = this.postList.filter(item => item.id !== id);
      })
    }
  }

}
