import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class ToursComponent {

  exhibitDetails = [
    { name: 'Exhibit #1', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #2', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #3', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #4', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #5', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #6', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #7', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #8', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #9', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #10', details: 'This is some filler text where the detailed description of the exhibit should go' },
    { name: 'Exhibit #11', details: 'This is some filler text where the detailed description of the exhibit should go' },
  ];

}
