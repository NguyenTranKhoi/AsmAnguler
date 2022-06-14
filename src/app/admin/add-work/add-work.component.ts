import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iworks } from 'src/app/models/works';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {
  work: Iworks = {
    title: "",
    created: "",
    category: 0,
    shortdes: "",
    description: ""
  }
  constructor(
    private workService: WorkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.workService.getWork(id).subscribe(data => {
        this.work = data
      })
    }
  }
  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.workService.updateWork(this.work).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/work');
        }, 2000)
      })
    } else {
      this.workService.addWork(this.work).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/work');
        }, 2000)
      });
    }

  }
}
