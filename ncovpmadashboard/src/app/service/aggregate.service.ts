import { Injectable } from '@angular/core';
import { RetrieveService, RetrieveDataType, Channel } from './retrieve.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import * as moment from 'moment';
import { CountryMapService } from './country-map.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AggregateService {
  
  channel$: Channel[]
  allCountries: string[]

  mappedToCode: {name: string, code: string}[]

  constructor(private retrieveService: RetrieveService, private countryMapService: CountryMapService, private spinnerService: NgxSpinnerService) {
    this.channel$ = []
    for (let enumItem in AggregateDataType) {
      this.channel$[enumItem] = {subscribers$: new BehaviorSubject(0), value: null};
   }
    this.retrieveService.subscribe(RetrieveDataType.ncov, (data) => {
      this.assembleDataForConsumption(data)
    })
  }

  subscribe(key: AggregateDataType, callback: Function) {
    this.channel$[key].subscribers$.subscribe({
      next: () => callback(this.channel$[key].value)
    })
  }

  assembleDataForConsumption(data: ncovData) {
    if (data !== this.channel$[AggregateDataType.latestRecovery].value) {
      this.allCountries = Array.from(new Set(data.confirmed.locations.map(loc => {
        return loc.country
      })))

      this.mappedToCode = this.allCountries.map(country => {
        const twoDigitCode = data.confirmed.locations.find(loc => loc.country === country).country_code
        const threeDigitCode = this.countryMapService.csvToJson.find(countryObj => countryObj["Alpha-2 code"] === twoDigitCode)
        return {
          name: country,
          code: threeDigitCode ? threeDigitCode["Alpha-3 code"] : "Unknown"
        }
      })
      this.assembleLatestRecoveryData(data)

      let today = moment.utc(data.confirmed.last_updated).format("M/D/YY")

      this.assembleRecoveryTrendData(data, today)
      this.channel$[AggregateDataType.dateToday].value = today;
      this.channel$[AggregateDataType.dateToday].subscribers$.next(today);
      this.channel$[AggregateDataType.allCountries].value = this.allCountries;
      this.channel$[AggregateDataType.allCountries].subscribers$.next(this.allCountries);
    }
  }

  private assembleLatestRecoveryData(data: ncovData) {
    const assembledData = {}
    assembledData['global'] = {
      vsConfirmed: data.recovered.latest / data.confirmed.latest,
      vsDeath: data.recovered.latest / data.deaths.latest 
    }

    this.allCountries.forEach(country => {
      const recovered = data.recovered.locations.filter(loc => loc.country === country)
      const confirmed = data.confirmed.locations.filter(loc => loc.country === country)
      const deaths = data.deaths.locations.filter(loc => loc.country === country)
      assembledData[country] = {
        confirmed: confirmed.map(locData => locData.latest).reduce((a,b) => a + b, 0),
        recovered: recovered.map(locData => locData.latest).reduce((a,b) => a + b, 0),
        died: deaths.map(locData => locData.latest).reduce((a,b) => a + b, 0),
        vsConfirmed: confirmed.map(locData => locData.latest).reduce((a,b) => a + b, 0) > 0 ? recovered.map(locData => locData.latest).reduce((a,b) => a + b, 0) / confirmed.map(locData => locData.latest).reduce((a,b) => a + b, 0) : recovered.map(locData => locData.latest).reduce((a,b) => a + b, 0),
        vsDeath: deaths.map(locData => locData.latest).reduce((a,b) => a + b, 0) > 0 ? recovered.map(locData => locData.latest).reduce((a,b) => a + b, 0) / deaths.map(locData => locData.latest).reduce((a,b) => a + b, 0)  : recovered.map(locData => locData.latest).reduce((a,b) => a + b, 0)
      }
    })

    let totalConfirmed = 0
    let totalDeath = 0
    let totalRecovered = 0

    Object.keys(assembledData).filter(key => key !== 'global').forEach(country => {
      totalRecovered += assembledData[country].recovered
      totalConfirmed += assembledData[country].confirmed
      totalDeath += assembledData[country].died
    })

    console.log(totalConfirmed)
    console.log(totalDeath)
    console.log(totalRecovered)

    this.channel$[AggregateDataType.latestRecovery].value = assembledData;
    this.channel$[AggregateDataType.latestRecovery].subscribers$.next(assembledData);


  }

  private assembleRecoveryTrendData(data: ncovData, today: string) {
    let globalTrends = {}
    const assembledData = {}
    const currDate = moment().clone()
    const past30Days = moment().clone().add(-30, 'days')

    this.allCountries.forEach(country => {
      const recovered = data.recovered.locations.filter(loc => loc.country === country)
      const confirmed = data.confirmed.locations.filter(loc => loc.country === country)
      const deaths = data.deaths.locations.filter(loc => loc.country === country)
      const dates = Object.keys(recovered[0].history).filter(date => {
        return moment(date, "l").isBetween(past30Days, currDate)
      }).sort((a,b) => moment(a, "l").valueOf() - moment(b, "l").valueOf())

      dates.forEach(date => {
        if (!assembledData['global']) {
          assembledData['global'] = {
            raw: {}
          }
        }
        if (!assembledData['global']['raw'][date]) {
          assembledData['global']['vsConfirmed'] = {}
          assembledData['global']['vsDeath'] = {}
          assembledData['global']['raw'][date] = {}
          assembledData['global']['raw'][date]['confirmed'] = 0
          assembledData['global']['raw'][date]['recovered'] = 0
          assembledData['global']['raw'][date]['died'] = 0
        }
        if (!assembledData[country]) {
          assembledData[country] = {
            vsConfirmed: {},
            vsDeath: {},
            confirmed: {},
            recovered: {},
            died: {}
          }
        }
        assembledData[country]['vsConfirmed'][date] = confirmed.map(locData => locData.history[date]).reduce((a,b) => a + b, 0) === 0 ? recovered.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)  : (recovered.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)  / confirmed.map(locData => locData.history[date]).reduce((a,b) => a + b, 0) )

        assembledData['global']['raw'][date]['confirmed'] += confirmed.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)
        assembledData['global']['raw'][date]['recovered'] += recovered.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)
        assembledData['global']['raw'][date]['died'] += deaths.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)

        assembledData[country]['vsDeath'][date] = deaths.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)  === 0 ? recovered.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)  : (recovered.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)  / deaths.map(locData => locData.history[date]).reduce((a,b) => a + b, 0) )

        assembledData[country]['confirmed'][date] = confirmed.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)
        assembledData[country]['recovered'][date] = recovered.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)
        assembledData[country]['died'][date] = deaths.map(locData => locData.history[date]).reduce((a,b) => a + b, 0)
      })

      assembledData[country]['vsConfirmed'][today] = confirmed.map(locData => locData['latest']).reduce((a,b) => a + b, 0) === 0 ? recovered.map(locData => locData['latest']).reduce((a,b) => a + b, 0)  : (recovered.map(locData => locData['latest']).reduce((a,b) => a + b, 0)  / confirmed.map(locData => locData['latest']).reduce((a,b) => a + b, 0) )

        if (!assembledData['global']['raw'][today]) {
          assembledData['global']['raw'][today] = {}
          assembledData['global']['raw'][today]['confirmed'] = 0
          assembledData['global']['raw'][today]['recovered'] = 0
          assembledData['global']['raw'][today]['died'] = 0
        }
        assembledData['global']['raw'][today]['confirmed'] += confirmed.map(locData => locData['latest']).reduce((a,b) => a + b, 0)
        assembledData['global']['raw'][today]['recovered'] += recovered.map(locData => locData['latest']).reduce((a,b) => a + b, 0)
        assembledData['global']['raw'][today]['died'] += deaths.map(locData => locData['latest']).reduce((a,b) => a + b, 0)

        assembledData[country]['vsDeath'][today] = deaths.map(locData => locData['latest']).reduce((a,b) => a + b, 0)  === 0 ? recovered.map(locData => locData['latest']).reduce((a,b) => a + b, 0)  : (recovered.map(locData => locData['latest']).reduce((a,b) => a + b, 0)  / deaths.map(locData => locData['latest']).reduce((a,b) => a + b, 0) )
    })

    Object.keys(assembledData['global']['raw']).forEach(date => {
      assembledData['global']['vsConfirmed'][date] = assembledData['global']['raw'][date].recovered / assembledData['global']['raw'][date].confirmed
      assembledData['global']['vsDeath'][date] = assembledData['global']['raw'][date].recovered / assembledData['global']['raw'][date].died
    })

    delete assembledData['global']['raw']

    this.channel$[AggregateDataType.recoveryTrend].value = assembledData;
    this.channel$[AggregateDataType.recoveryTrend].subscribers$.next(assembledData);

    /** spinner ends after 5 seconds */
    this.spinnerService.hide();
  }

}


export interface Ratio {
  value: number,
  delta: number,
  date: string
}

export enum AggregateDataType {
  latestRecovery = 'latestRecovery',
  recoveryTrend = 'recoveryTrend',
  allCountries = 'allCountries',
  dateToday = 'dateToday'
}

export interface ncovData {
  confirmed: StandardDemographic;
  deaths: StandardDemographic;
  latest: Latest;
  recovered: StandardDemographic;
}
export interface StandardDemographic {
  last_updated: string;
  latest: number;
  locations?: (LocationsEntity)[] | null;
  source: string;
}
export interface LocationsEntity {
  coordinates: Coordinates;
  country: string;
  country_code: string;
  history: {};
  latest: number;
  province: string;
}
export interface Coordinates {
  lat: string;
  long: string;
}

export interface Latest {
  confirmed: number;
  deaths: number;
  recovered: number;
}
