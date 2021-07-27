import { Component, OnInit } from '@angular/core';
import { AuthStorage } from 'src/app/helpers/auth-storage';
import { APIService } from 'src/app/services/api.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [MessageService]
})
export class PostListComponent implements OnInit {
  products: any[] = [];
  selectedProducts: any[];
  vendorId: string;
  constructor(private apiService: APIService,
              private authStorage: AuthStorage,
              private messageService: MessageService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.vendorId = this.authStorage.getCurrentUser().id;
    if (this.vendorId) {
      this.fetchAccomodations();
    }
  }

  onPost() {
    this.router.navigate(['/add-post']);
  }

  onDetail(id: string) {
    this.router.navigate(['/detail'], { queryParams: { id } });
  }

  onDelete(id: string) {
    if (window.confirm("Bạn có muốn xóa?")) {
      const body = {
        id: id
      };
      this.apiService.httpPost('deleteAccomodation', body, (res) => {
        if (res.code === 200) {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Thành công!'});
          this.fetchAccomodations();
        } else {
          this.messageService.add({severity:'error', summary: 'Error', detail: res.data});
        }
      }, ()=> {});
    }
  }

  fetchAccomodations() {
    let param = [{key: "vendor", value: this.vendorId}];
    this.apiService.httpGetWithParams('getAccomodations', param, (res) => {
      if (res.code === 200) {
        this.products = res.data;
      }
    }, () => {});
  }

}
