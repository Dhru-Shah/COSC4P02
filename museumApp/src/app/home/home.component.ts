import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  onScroll(): void {

  /*
    Support for Arrow to fade when user scrolls. This requires jquery and can be implemented after core website is created for additional polishing.


  $(document).ready(function() {
    
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
        $('.arrow').addClass('fade');
      } else{
        $('.arrow').removeClass('fade');
      }
    })
  });
    */

  }

}
