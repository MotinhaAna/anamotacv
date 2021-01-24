import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @ViewChild('about') about;
  @ViewChild('education') education;
  @ViewChild('experience') experience;
  @ViewChild('skills') skills;

  ngOnInit(): void {
  }
  updateActive(ev: HTMLInputElement) {
    $('.nav-link').removeClass('active');
    ev.classList.add('active');
  }

}
