import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  products: any[] = [];
  selectedProducts: any[];
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.fetchAccomodations();
  }

  fetchAccomodations() {
    this.apiService.httpGet('getAccomodations', (res) => {
      if (res.code === 200) {
        this.products = res.data;
        console.log('this.products: ', this.products);

        // this.filteredProducts = this.products;
      }
    }, () => {});
  }

}
