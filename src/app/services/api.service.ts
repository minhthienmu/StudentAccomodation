import { Injectable } from '@angular/core';
import { ApiClientService } from "./api-client.service"; 

@Injectable(
    { providedIn: 'root' }
)
export class APIService extends ApiClientService {
    list_api = [
        //User
        { key: 'register', link: 'register' },
        { key: 'login', link: 'login' },
        { key: 'logout', link: 'logout'}, //chưa có api

        //Accomodation
        { key: 'getAccomodations', link: 'get-accomodations' },
        { key: 'getAccomodationDetail', link: 'get-accomodation-detail' },
        { key: 'createAccomodation', link: 'create-accomodation'},
        { key: 'deleteAccomodation', link: 'delete-accomodation' },
        { key: 'updateAccomodation', link: 'update-accomodation'},
        { key: 'filterAccomodation', link: 'filter-accomodation'}, //chưa có api

        //Contact
        { key: 'getAccomodations', link: 'get-nofications' }, //chưa có api
        { key: 'getContact', link: 'list-contact' }, //chưa có api
        { key: 'sendContact', link: 'send-contact'}, //chưa có api

    ]
}