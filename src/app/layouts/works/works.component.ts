import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/works';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works!: any;

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.onGetAllWork();
  }
  onGetAllWork() {
    this.workService.getAllWork().subscribe(data => {
      this.works = data
    })
  }

}
