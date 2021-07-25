import { Injectable } from '@angular/core';
import { HttpConfigService } from './http-config.service';
import { ApiConfig } from './api-config';

@Injectable()
export class ApiClientService {
    protected list_api: any;

    constructor(
        private httpConfig: HttpConfigService,
        private apiConfig: ApiConfig,
    ) { }

    getApiLink(key: string) {
        return this.apiConfig.domain_api + this.list_api.filter(function (item) { return item.key === key; })[0].link;
    }

    httpGet(api: string, callback, final) {
        return this.httpConfig.httpGetWithParams(this.getApiLink(api), [])
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    httpGetWithParams(api: string, params, callback, final) {
        return this.httpConfig.httpGetWithParams(this.getApiLink(api), params)
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    httpPost(api: string, body, callback, final) {
        return this.httpConfig.httpPost(this.getApiLink(api), body)
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    //http observable
    httpGetObs(api: string, params=[]) {
        return this.httpConfig.httpGetWithParams(this.getApiLink(api), params);
    }

    httpPostObs(api: string, body) {
        return this.httpConfig.httpPost(this.getApiLink(api), body);
    }
    
}