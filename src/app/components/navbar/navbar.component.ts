import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, PrimeNGConfig} from 'primeng/api';
import { AuthStorage } from 'src/app/helpers/auth-storage';
import { APIService } from 'src/app/services/api.service';
import {MessageService} from 'primeng/api';
import { roles } from 'src/app/mockup/mockup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  showOption: boolean = false;
  showLogin: boolean = false;
  user: any = {};
  roles = roles;

  displaySignin: boolean = false;
  displaySignup: boolean = false;

  constructor(private primengConfig: PrimeNGConfig,
              private router: Router,
              private authStorage: AuthStorage,
              private apiService: APIService,
              private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if (!this.authStorage.getCurrentUser()) {
      this.showLogin = true;
    }
    if (this.authStorage.getCurrentUser()?.role) {
      this.showOption = true;
      if (this.authStorage.getCurrentUser().role === 1) {
        this.items = [
          {
            label: 'Đăng xuất',
            command: () => {
                this.logout();
            }
          }
        ];
      } else {
        this.items = [
          {
            label: 'Đăng tin',
            command: () => {
                this.post();
            }
          },
          {
            label: 'Quản lý bài đăng',
            command: () => {
                this.postList();
            }
          },
          {
            label: 'Đăng xuất',
            command: () => {
                this.logout();
            }
          }
        ];
      }
    }
  }

  goHomePage() {
    this.router.navigate(["/"]);
  }

  post() {
    this.router.navigate(["/add-post"]);
  }

  postList() {
    this.router.navigate(["/post-list"]);
  }

  logout() {
    this.showLogin = true;
    this.showOption = false;
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/']);
  }

  signUp() {
    this.user.roles = roles[0];
    this.displaySignup = true;
  }

  signIn() {
    this.displaySignin = true;
  }

  confirmSignUp() {
    let body = {
      username: this.user.username,
      password: this.user.password,
      role: this.user.roles.key
    } 
    this.apiService.httpPost('register', body, (res) => {
      if (res.code === 200) {
        this.displaySignup = false;
        this.displaySignin = true;
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Đăng kí thành công!'});
      } else {
        this.messageService.add({severity:'warn', summary: 'Warn', detail: res.data});
      }
    },() => {});
    
  }

  confirmSignIn() {
    let body = {
      username: this.user.username,
      password: this.user.password
    }
    this.apiService.httpPost('login', body, (res) => {
      if (res.code === 200) {
        this.displaySignin = false;
        this.showLogin = false;
        localStorage.setItem('token', JSON.stringify(res.data));
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Đăng nhập thành công!'});
        this.ngOnInit();
      } else {
        this.messageService.add({severity:'warn', summary: 'Warn', detail: res.data});
      }
    },() => {});
  }
}
