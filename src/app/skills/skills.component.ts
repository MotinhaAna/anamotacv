import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills = [
    {
      "name": "SAPUI5, FIORI",
      "img": '../assets/images/sapui5.png',
      "value": 90
    },
    {
      "name": "SQL, SAP HANA",
      "img": '../assets/images/hana.png',
      "value": 70
    },
    {
      "name": "JAVASCRIPT",
      "img": '../assets/images/ts.png',
      "value": 60
    },
    {
      "name": "ANGULAR",
      "img": '../assets/images/angular.png',
      "value": 50
    },
    {
      "name": "TYPESCRIPT",
      "img": '../assets/images/ts.png',
      "value": 50
    },
    {
      "name": "CSS, SASS",
      "img": '../assets/images/sass.png',
      "value": 40
    },
    {
      "name": "NODE, MONGODB",
      "img": '../assets/images/node.png',
      "value": 40
    },
    {
      "name": "GIT",
      "img": '../assets/images/git.png',
      "value": 50
    }
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /* var firstScrollSpyEl = document.querySelector('[data-spy="scroll"]')
    firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
      console.log("cenas");
    }) */


  }

}
