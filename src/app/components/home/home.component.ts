import {Component} from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { APIService } from '../../services/api.service';
import { Router } from '@angular/router';

export const districts = [
  {
    key: 0,
    value: 'Tất cả'
  },
  {
    key: 1,
    value: 'Quận 1'
  },
  {
    key: 2,
    value: 'Quận 2'
  },
  {
    key: 3,
    value: 'Quận 3'
  },
  {
    key: 4,
    value: 'Quận 4'
  },
  {
    key: 5,
    value: 'Quận 5'
  },
  {
    key: 6,
    value: 'Quận 6'
  },
  {
    key: 7,
    value: 'Quận 7'
  },
  {
    key: 8,
    value: 'Quận 8'
  },
  {
    key: 9,
    value: 'Quận 9'
  },
  {
    key: 10,
    value: 'Quận 10'
  },
  {
    key: 11,
    value: 'Quận 11'
  },
  {
    key: 12,
    value: 'Quận 12'
  },
  {
    key: 13,
    value: 'Quận Bình Tân'
  },
  {
    key: 14,
    value: 'Quận Bình Thạnh'
  },
  {
    key: 15,
    value: 'Quận Gò Vấp'
  },
  {
    key: 16,
    value: 'Quận Phú Nhuận'
  },
  {
    key: 17,
    value: 'Quận Tân Bình'
  },
  {
    key: 18,
    value: 'Quận Tân Phú'
  },
  {
    key: 19,
    value: 'TP Thủ Đức'
  },
  {
    key: 20,
    value: 'Huyện Bình Chánh'
  },
  {
    key: 21,
    value: 'Huyện Cần Giờ'
  },
  {
    key: 22,
    value: 'Huyện Củ Chi'
  },
  {
    key: 23,
    value: 'Huyện Hóc Môn'
  },
  {
    key: 24,
    value: 'Huyện Nhà Bè'
  },
];

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
  districts: {key: number, value: string}[] = districts;
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
