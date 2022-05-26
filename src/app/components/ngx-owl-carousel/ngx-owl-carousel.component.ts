import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-ngx-owl-carousel',
  templateUrl: './ngx-owl-carousel.component.html',
  styleUrls: ['./ngx-owl-carousel.component.scss']
})
export class NgxOwlCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 800,
    navText: ['&#8249', '&#8250;'],
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      1000: {
        items: 6
      }
    },
    nav: true
  }
  slidesStore: any[] = [
    {src :"../assets/images/1080p-Full-HD-Images.jpg",
     alt :"slide.alt",
     title :"slide.title"
    },

    {src :"../assets/images/138728.jpg",
    alt :"slide.alt",
    title :"slide.title"},

    {src :"../assets/images/pexels-photo-753626.jpeg",
    alt :"slide.alt",
    title :"slide.title"}
  ];
}
