import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  responsiveOptions;
  _id: string;
  data: any;
  images: {src: string}[] = [];
  constructor(
    private apiService: APIService,
    private activeRoute: ActivatedRoute
  ) {
		this.responsiveOptions = [
            {
                breakpoint: '0px',
                numVisible: 1,
                numScroll: 1
            },
        ];
	}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this._id = params.id;
      if (this._id) {
        this.getAccomodationDetail(this._id);
      }
    });

  }

  getAccomodationDetail(id: string) {
    let params = [
      {key: "id", value: id}
    ];

    this.apiService.httpGetWithParams('getAccomodationDetail', params, (res) => {
      if (res.code === 200) {
        console.log(res.data);
        this.data = res.data;
        Object.keys(this.data).forEach((key) => {
          if (key.includes('image')) {
            this.images.push({src: this.data[key]});
          }
        });
      }
      console.log('this.images: ', this.images);
    }, ()=>{});
  }

}
