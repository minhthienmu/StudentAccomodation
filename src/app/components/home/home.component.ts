import {Component} from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { APIService } from '../../services/api.service';
import { Router } from '@angular/router';
import { districts } from '../../mockup/mockup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  sortKey: any;
  products: any[] = [];
  price: number;
  address: string;
  districts: {key: string, value: string}[] = [...districts];
  selectedDistrict: string = districts[0].value;

  selectedPrice = {min:50000, max: 10000000};

  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  filteredProducts: any[] = [];

  rangeValues = [500000, 10000000];

  constructor(private primengConfig: PrimeNGConfig,
              private apiService: APIService,
              private router: Router
              ) { }

  ngOnInit() {
      this.districts.unshift({ key: "Tất cả", value: "Tất cả"});
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

  selectDistrict(e): void {
    this.selectedDistrict = e.value.value;
  }

  selectPrice(e): void {
    this.selectedPrice.min = e.values[0] ? e.values[0] : this.selectedPrice.min;
    this.selectedPrice.max = e.values[1] ? e.values[1] : this.selectedPrice.max;
  }

  showDetail(id) {
    this.router.navigate(['/detail'], { queryParams: { id } });
  }

  filter() {
    this.filteredProducts = this.products.filter(item => {
      if ( (item.address === this.selectedDistrict || this.selectedDistrict === 'Tất cả') && (item.price <= this.selectedPrice.max && item.price >= this.selectedPrice.min)
      ) {
        return true;
      }
      return false;
    });
  }

  //API
  fetchAccomodations() {
    this.apiService.httpGet('getAccomodations', (res) => {
      if (res.code === 200) {
        this.products = res.data;
        this.filteredProducts = this.products;
      }
    }, () => {});
  }
}
