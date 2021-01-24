import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education = [
    {
      "id": "1",
      "title": "Integrated Master in Biomedical Engineering",
      "dates": "2011 - 2016",
      "description": "During my Bachelor’s degree I have acquired experience and knowledge in various areas like Biochemistry, Mechanics, Programming and Human Physiology. On my Master’s specialization, Medical Electronics, my formation gave me thorough knowledge on Microfabrication, Image Processing, Medical Instrumentation, Robotics and Biosensors. During my studies, I developed many projects, in particular, EOG signal acquisition and MRI image normalization."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
