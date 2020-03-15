import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AggregateService, AggregateDataType } from '../service/aggregate.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() change = new EventEmitter()
  countries: string[]
  dateToday: string

  constructor(private aggregateService: AggregateService) { }

  ngOnInit() {
    this.aggregateService.subscribe(AggregateDataType.allCountries, (data) => {
      if (data) {
        this.countries = data.sort((a,b) => {
          if (a > b) {
            return 1;
          }
          if (b > a) {
              return -1;
          }
          return 0;
          })
      }
    })

    this.aggregateService.subscribe(AggregateDataType.dateToday, (data) => {
      if (data) {
        this.dateToday = data
      }
    })
  }

  onChange(value: any) {
    this.change.emit(value)
  }



}
