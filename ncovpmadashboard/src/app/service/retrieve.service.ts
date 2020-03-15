import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  ncovData: any
  channel$: Channel[]


  constructor(private httpClient: HttpClient) {
    this.channel$ = []
    for (let enumItem in RetrieveDataType) {
      this.channel$[enumItem] = {subscribers$: new BehaviorSubject(0), value: null};
   }
    this.retrieve()
    setInterval(() => {
      this.retrieve
    }, 180000)
  }

  subscribe(key: RetrieveDataType, callback: Function) {
    this.channel$[key].subscribers$.subscribe({
      next: () => callback(this.channel$[key].value)
    })
  }

  private retrieve() {
    return this.httpClient.get(Location.joinWithSlash(environment.api, 'all') ).subscribe(data => {
      if (data !== this.channel$[RetrieveDataType.ncov].value) {
        this.channel$[RetrieveDataType.ncov].value = data;
        this.channel$[RetrieveDataType.ncov].subscribers$.next(data);
      }
    })
  }
}

export interface Channel {
  subscribers$: BehaviorSubject<any>;
  value: any;
}

export enum RetrieveDataType {
  ncov = 'ncov'
}