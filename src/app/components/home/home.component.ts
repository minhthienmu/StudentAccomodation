import {Component} from '@angular/core';
import { ProductService } from '../../productservice';
import { Product } from '../../product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { APIService } from '../../services/api.service';
import { Router } from '@angular/router';

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

  rangeValues = [500000, 10000000];

  constructor(private primengConfig: PrimeNGConfig,
              private apiService: APIService,
              private router: Router
              ) { }

  ngOnInit() {
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
    this.router.navigate(['/detail', id]);
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
