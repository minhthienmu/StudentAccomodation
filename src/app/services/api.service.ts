import { Injectable } from '@angular/core';
import { ApiClientService } from "./api-client.service"; 

@Injectable(
    { providedIn: 'root' }
)
export class APIService extends ApiClientService {
    list_api = [
        { key: 'getAccomodations', link: 'get-accomodations' },
        { key: 'getAccomodationDetail', link: 'get-accomodation-detail' },

        { key: 'register', link: 'register' },
        { key: 'login', link: 'login' },
    ]
}