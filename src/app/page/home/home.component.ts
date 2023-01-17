
import { Component,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { JobListService } from 'src/app/cagetory_job/job-list.service';




// install Swiper modules
SwiperCore.use([Navigation, Pagination, ]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
constructor(private service:JobListService){}
  jobData:any;
  jobData1:any;
  jobData2:any;
  ngOnInit(): void{
    this.jobData = this.service.jobdetail,
    this.jobData1 = this.service.jobdetail1,
    this.jobData2 = this.service.jobdetail2
  }
}

