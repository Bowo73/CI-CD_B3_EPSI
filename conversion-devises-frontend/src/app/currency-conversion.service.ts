import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrencyConversionService {
    private baseUrl = 'http://localhost:3000'; // URL of backend API

    constructor(private http: HttpClient) { }

    getCurrencies(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/currencies`);
    }

    convertCurrency(amount: number, sourceCurrency: string, targetCurrency: string): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/convert`, { amount, sourceCurrency, targetCurrency });
    }
}
