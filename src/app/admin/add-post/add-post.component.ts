import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iposts } from 'src/app/models/posts';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Iposts = {
    title: "",
    created: "",
    category: 0,
    shortdes: "",
    description: ""
  }

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.post = data
      })
    }
  }
  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.updatePost(this.post).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/post');
        }, 2000)
      })
    } else {
      this.postService.addPost(this.post).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/post');
        }, 2000)
      });
    }

  }
}
