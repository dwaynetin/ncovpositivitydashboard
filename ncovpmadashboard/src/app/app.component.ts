import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ncovpmadashboard';
  selectedCountry: string

  constructor(private spinnerService: NgxSpinnerService) {
  }

  ngAfterViewInit() {
    /** spinner starts on init */
    this.spinnerService.show();
  }

  onChange(value) {
    this.selectedCountry = value
  }
}
