import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  hobbies = [
    {
      "id": "1",
      "icon": "fas fa-heart",
      "name": "Volunteering",
      "desc": "Refood feeds people in need and prevents waste"
    },
    {
      "id": "1",
      "icon": "fas fa-globe-americas",
      "name": "Travel",
      "desc": "Travelling, the food of the soul"
    },
    {
      "id": "1",
      "icon": "fas fa-running",
      "name": "Sports",
      "desc": "It keeps me energetic"
    },
    {
      "id": "1",
      "icon": "fas fa-book",
      "name": "Reading",
      "desc": "Favourite Book: Sapiens, Yuval Harari"
    }
  ]

  ngOnInit(): void {


    /*setInterval(function () {
      $(".target").toggleClass('shaking');
    }, 1000);*/

  }

}
