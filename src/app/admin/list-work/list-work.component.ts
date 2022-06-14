import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/works';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {
  workList!: Iworks[];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.showWorks();
  }
  showWorks() {
    this.workService.getWorks().subscribe(data => {
      this.workList = data
    })
  }
  onRemoveWork(id: number) {
    const confirm = window.confirm("Bạn có chắc muốn xoá không ?");
    if (confirm) {
      this.workService.removeWork(id).subscribe(() => {
        this.workList = this.workList.filter(item => item.id !== id);
      })
    }
  }
}
