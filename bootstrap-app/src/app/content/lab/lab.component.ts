import { Component, OnInit } from '@angular/core';

import { LabService } from './lab.service';

@Component({
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  courseProjects: Array<object>;
  independentProjects: Array<object>;
  stackblitzProjects: Array<object>;

  constructor(
    private labService: LabService
  ) { }

  ngOnInit() {

    this.courseProjects = this.labService.getLabCourseData();
    this.independentProjects = this.labService.getLabIndependentData();
    this.stackblitzProjects = this.labService.getLabStackblitzData();
  }

}
