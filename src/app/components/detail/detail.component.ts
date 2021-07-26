import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { IProduct } from '../../models/product.model'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  responsiveOptions;
  _id: string;
  product: IProduct;
  images: {src: string}[] = [];
  // products = [
  //   {
  //     src: 'https://via.placeholder.com/300',
  //   },
  //   {
  //     src: 'https://via.placeholder.com/300',
  //   },
  //   {
  //     src: 'https://via.placeholder.com/300',
  //   },
  //   {
  //     src: 'https://via.placeholder.com/300',
  //   },
  // ]
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
      console.log('params: ', params);

      this._id = params.id;
      console.log('this._id: ', this._id);
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
        this.product = res.data;
        Object.keys(this.product).forEach((key) => {
          if (key.includes('image')) {
            this.images.push({src: this.product[key]});
          }
        });
      }
      console.log('this.images: ', this.images);
    }, ()=>{});
  }

}
