import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  responsiveOptions;
  products = [
    {
      src: 'https://via.placeholder.com/300',
    },
    {
      src: 'https://via.placeholder.com/300',
    },
    {
      src: 'https://via.placeholder.com/300',
    },
    {
      src: 'https://via.placeholder.com/300',
    },
  ]
  constructor() {
		this.responsiveOptions = [
            {
                breakpoint: '0px',
                numVisible: 1,
                numScroll: 1
            },
        ];
	}

  ngOnInit(): void {
  }

}
