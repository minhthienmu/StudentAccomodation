import {Component} from '@angular/core';
import { ProductService } from '../../productservice';
import { Product } from '../../product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  sortKey: any; 
  products: Product[];
  price: number;
  address: string;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private productService: ProductService, 
              private primengConfig: PrimeNGConfig,
              private apiService: APIService,
              ) { }

  ngOnInit() {
      // let data = [
      //   {
      //     id: "1",
      //     code: "1",
      //     name: "Nhà 1",
      //     description: "Mô tả 1",
      //     rating: 5,
      //     category: "Căn hộ",
      //     price: 1000000,
      //     image: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      //     address: "Thủ Đức"
      //   },
      //   {
      //     id: "2",
      //     code: "2",
      //     name: "Nhà 2",
      //     description: "Mô tả 2",
      //     rating: 5,
      //     category: "Nhà trọ",
      //     price: 1000000,
      //     image: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      //     address: "Quận 9"
      //   }
      // ]
      // this.products = data;

      this.fetchAccomodations();

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];

      this.primengConfig.ripple = true;
  }
  
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  showDetail(id) {
    this.getAccomodationDetail(id);
  }

  filter() {
    if (this.address != null && this.address != null) {
      this.products = this.products.filter(e => (e.address === this.address && e.price == this.price));
    }
  }

  //API
  fetchAccomodations() {
    this.apiService.httpGet('getAccomodations', (res) => {
      if (res.code === 200) {
        this.products = res.data;
      }
    }, () => {});
  }

  getAccomodationDetail(id: number) {
    let params = [
      {key: "id", value: id}
    ];

    this.apiService.httpGetWithParams('getAccomodationDetail', params, (res) => {
      if (res.code === 200) {
        console.log(res.data);
      }
    }, ()=>{});
  }
}
