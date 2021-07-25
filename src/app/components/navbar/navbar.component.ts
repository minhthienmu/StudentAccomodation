import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // login() {
  //   let body = {
  //     username: "thientm",
  //     password: "thien9999"
  //   }
  
  //   this.apiService.httpPost('login', body, (res) => {
  //     if (res.code === 200) {
  //       localStorage.setItem('token', JSON.stringify(res.data));
  //       console.log(res.data);
  //     }
  //   },() => {});
  // }

}
