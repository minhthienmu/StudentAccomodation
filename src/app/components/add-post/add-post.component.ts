import { Component, OnInit } from '@angular/core';
import { districts, categories } from 'src/app/mockup/mockup';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  districts = districts;
  categories = categories;
  data: any = {};

  uploadedFiles: any[] = [];
  base64Files: any[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.data.address = this.districts[0];
    this.data.categories = this.categories[0];
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
      description: this.data.description
    }

    this.apiService.httpPost('createAccomodation', body, (res) => {
      if (res.code === 200) {
        console.log(res.data);
      }
    },() => {});
  }

}
