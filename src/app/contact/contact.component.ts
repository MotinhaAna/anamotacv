import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oncontact(event) {
    switch (event.target.id) {
      case "linkedin":
        window.open('https://www.linkedin.com/in/ana-mota-76990b104', '_blank', 'noopener noreferrer');
        break;

      case "gmail":
        window.open("mailto:afamota@gmail.com");
        break;

      default:
        break;
    }

  }

}
