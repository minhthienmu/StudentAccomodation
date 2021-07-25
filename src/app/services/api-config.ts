import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable(
    { providedIn: 'root' }
)
export class ApiConfig {
    public domain_image: string;
    public domain_api: string;
    public domain_v1: string;

    constructor(@Inject(DOCUMENT) private document: Document) {
        console.log(this.document.location.host);
        switch (this.document.location.host) {                
            case 'localhost:4200':
                this.domain_v1 = 'http://localhost:8008';
                this.domain_api = 'http://localhost:8008/api/';
                //this.domain_image = '';
                break;
        }
    }
}