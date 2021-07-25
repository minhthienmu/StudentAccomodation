import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpConfigService {
    private _httpOptions = {
        headers: {},
        params: null
    }
	
    constructor(
        private http: HttpClient,
    ) { }

    httpGet(url) {
        return this.http.get(url, this._httpOptions);
    }

    httpGetWithParams(url, params) {
        this._httpOptions.params = new HttpParams();
        for (var param of params) {
            this._httpOptions.params = this._httpOptions.params.append(param.key, param.value);
        }

        return this.http.get(url, this._httpOptions);
    }

    httpPost(url, body) {
        return this.http.post(url, body, this._httpOptions);
    }
}