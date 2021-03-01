import { Component } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anamotacv';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    $(document).ready(function () {
      $('.nav-link').on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html,body').animate({ scrollTop: $(hash).offset().top }, 1000, function () {
          window.location.hash = hash;
        })

        $('#navbarNav').removeClass('show');
      })
    })

    $(document).ready(function () {
      $(window).on('activate.bs.scrollspy', function (e) {

        console.log("cenas");
        /* e.preventDefault();
        var hash = this.hash;
        $('html,body').animate({ scrollTop: $(hash).offset().top }, 1000, function () {
          window.location.hash = hash;
        }) */
      })
    })
  }


}
