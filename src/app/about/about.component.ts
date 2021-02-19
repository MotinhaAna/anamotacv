import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() { }

  itemImageUrl = '../assets/images/avatar_am.png';

  name = "ANA MOTA";
  title = "Software and  Security Enginner."
  interests = "Interests: Technology, Software, Web security, Javascript";
  aboutme = "A Javascript lover, looking for the opportunity to become a Full-stack Developer. Captivated by technology evolution, a believer of automation technologies is looking for the next challenge in the Tech field.";

  ngOnInit(): void {
  }

}
