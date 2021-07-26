import { Component, OnInit } from '@angular/core';
import { AuthStorage } from 'src/app/helpers/auth-storage';
import { districts, categories } from 'src/app/mockup/mockup';
import { APIService } from 'src/app/services/api.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [MessageService]
})
export class AddPostComponent implements OnInit {
  districts = districts;
  categories = categories;
  data: any = {};

  uploadedFiles: any[] = [];
  base64Files: any[] = [];
  vendorId: string;
  vendorName: string;

  constructor(private apiService: APIService,
              private authStorage: AuthStorage,
              private messageService: MessageService,
              private router: Router,
    ) { }

  ngOnInit(): void {
    this.data.address = this.districts[0];
    this.data.categories = this.categories[0];
    this.vendorId = this.authStorage.getCurrentUser().id;
    this.vendorName = this.authStorage.getCurrentUser().username;
  }

  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
      let reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
		let binaryString = readerEvt.target.result;
		this.base64Files.push(btoa(binaryString));
	}

  onSubmit() {
    let images: any[] = [];
    this.base64Files.forEach(file => {
      images.push("data:image/png;base64," + file);
    })
    let body = {
      name: this.data.name,
      address: this.data.address.value,
      price: this.data.price,
      category: this.data.categories.value,
      image: images,
      description: this.data.description,
      vendor: this.vendorId,
      vendorName: this.vendorName
    }

    this.apiService.httpPost('createAccomodation', body, (res) => {
      if (res.code === 200) {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Đăng tin thành công!'});
        this.router.navigate(['/post-list'])
      } else {
        this.messageService.add({severity:'error', summary: 'Error', detail: res.data});
      }
    },() => {});
  }

}
