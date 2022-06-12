import { Component } from '@angular/core';
import mockData from 'src/data';
import { Iposts } from './models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // postList: Iposts[] = mockData;
  // onHandleAdd(post: any) {
  //   console.log('post', post);
  //   this.postList.push(post);
  // }
  // title = 'AsmAngular';
}
