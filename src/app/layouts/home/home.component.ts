import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!: any
  works!: any
  constructor(
    private postService: PostService,
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(res => {
      this.posts = res;
    })
    this.onGetWork();
  }
  onGetWork() {
    this.workService.getAllWork().subscribe(res => {
      this.works = res;
    })
  }
}
