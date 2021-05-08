import {Component} from '@angular/core';
import { ProductService } from '../../productservice';
import { Product } from '../../product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


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
              private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      let data = [
        {
          id: "1",
          code: "1",
          name: "Nhà 1",
          description: "Mô tả 1",
          rating: 5,
          category: "Căn hộ",
          price: 1000000,
          image: "canho1.jpg",
          address: "Thủ Đức"
        },
        {
          id: "2",
          code: "2",
          name: "Nhà 2",
          description: "Mô tả 2",
          rating: 5,
          category: "Nhà trọ",
          price: 1000000,
          image: "canho2.jpg",
          address: "Quận 9"
        }
      ]

      this.products = data;

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
    //this.products = this.products.filter(e => e.id == id);
  }

  filter() {
    if (this.address != null && this.address != null) {
      this.products = this.products.filter(e => (e.address === this.address && e.price == this.price));
    }
  }
 
}
