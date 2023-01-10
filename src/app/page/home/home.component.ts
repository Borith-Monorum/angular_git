
import { Component,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';




// install Swiper modules
SwiperCore.use([Navigation, Pagination, ]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

}
