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

    getCurrentUser() {
        try {
            let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
            return JSON.parse(token);
        }
        catch {
            return null;
        }
    }

    initHttpHeader() {
        let currentUser = this.getCurrentUser();
        if (currentUser == null) {
            this._httpOptions.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': '',
            });
        }
        else {
            this._httpOptions.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': currentUser.token,
            });
        }
    }

    httpGet(url) {
        this.initHttpHeader();
        console.log(this._httpOptions)
        return this.http.get(url, this._httpOptions);
    }

    httpGetWithParams(url, params) {
        this.initHttpHeader();
        this._httpOptions.params = new HttpParams();
        for (var param of params) {
            this._httpOptions.params = this._httpOptions.params.append(param.key, param.value);
        }

        return this.http.get(url, this._httpOptions);
    }

    httpPost(url, body) {
        this.initHttpHeader();
        return this.http.post(url, body, this._httpOptions);
    }
}