import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from './../currency-conversion.service';


@Component({
    selector: 'app-conversion-form',
    templateUrl: './conversion-form.component.html',
    styleUrls: ['./conversion-form.component.scss']
})
export class ConversionFormComponent implements OnInit {
    amount!: number;
    sourceCurrency!: string;
    targetCurrency!: string;
    currencies!: any[];
    conversionResult!: number;

    constructor(private currencyService: CurrencyConversionService) { }

    ngOnInit(): void {
        // Fetch list of currencies from backend
        this.currencyService.getCurrencies().subscribe(data => {
            this.currencies = data;
        });
    }

    convertCurrency(): void {
        this.currencyService.convertCurrency(this.amount, this.sourceCurrency, this.targetCurrency)
            .subscribe(result => {
              this.conversionResult = result.amount; // Store the conversion result
              // Handle conversion result
            });
    }
}
