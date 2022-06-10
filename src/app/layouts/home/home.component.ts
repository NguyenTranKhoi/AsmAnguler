import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts!: any

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(res => {
      this.posts = res;
    })
  }

}
