import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)
export class AuthStorage {
    getCurrentUser() {
        try {
            let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
            return JSON.parse(token);
        }
        catch {
            return null;
        }
    }
}