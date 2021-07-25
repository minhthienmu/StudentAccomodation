import { Injectable } from '@angular/core';
import { ApiClientService } from "./api-client.service"; 

@Injectable(
    { providedIn: 'root' }
)
export class APIService extends ApiClientService {
    list_api = [
        { key: 'getAccomodations', link: 'get-accomodations' },
    ]
}