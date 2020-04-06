import { Injectable } from '@angular/core';
import { LabCourseProjectsMock } from './lab-course-projects.mock';
import { LabIndependentProjectsMock } from './lab-independent-projects.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LabStackblitzProjectsMock } from './lab-stackblitz-projects.mock';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor() {}

  getLabCourseData() {
    try {
      return LabCourseProjectsMock.filter((mock) => mock.flagShowProject === true);
    } catch (error) {
      console.log('Error service LabCourseProjectsMock ', error);
    }
  }

  getLabIndependentData(){
    try {
      return LabIndependentProjectsMock.filter((mock) => mock.flagShowProject === true);
    } catch (error) {
      console.log('Error service LabIndependentProjectsMock ', error);
    }
  }

  getLabStackblitzData(){
    try {
      return LabStackblitzProjectsMock.filter((mock) => mock.flagShowProject === true);
    } catch (error) {
      console.log('Error service LabStackblitzProjectMock ', error);
    }
  }

}
