import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Chart from 'chart.js'

declare const d3: any
declare const Datamap: any

import { AggregateService, AggregateDataType } from '../service/aggregate.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  latestRecoveryData
  recoveryTrendData

  recoveryTrendHeight
  deathTrendHeight

  currentTrendData

  countries: string[]
  _selected: string = 'global'

  recoveryChart
  deathChart

  topTenColumns: any[]
  topTenRows: any[]

  @ViewChild('recoveryTrendDiv', {static: true}) recoveryTrendDiv: ElementRef
  @ViewChild('deathTrendDiv', {static: true}) deathTrendDiv: ElementRef

  @Input()
  set selected(value: string) {
    if (value && typeof value === 'string') {
      this._selected = (value && value.trim()) || 'global';
      this.drawTrend(this._selected)
    }
  }

  constructor(private aggregateService: AggregateService) {
  }

  ngOnInit() {

    var basic_choropleth = new Datamap({
      element: document.getElementById("basic"),
      projection: 'mercator',
      fills: {
        defaultFill: "#ABDDA4",
        authorHasTraveledTo: "#fa0fa0"
      },
      data: {
        USA: { fillKey: "authorHasTraveledTo" },
        JPN: { fillKey: "authorHasTraveledTo" },
        ITA: { fillKey: "authorHasTraveledTo" },
        CRI: { fillKey: "authorHasTraveledTo" },
        KOR: { fillKey: "authorHasTraveledTo" },
        DEU: { fillKey: "authorHasTraveledTo" },
      }
    });
    
    var colors = d3.scale.category10();
    
    window.setInterval(function() {
      basic_choropleth.updateChoropleth({
        USA: colors((Math.random() * 10).toString()),
        RUS: colors((Math.random() * 100).toString()),
        AUS: { fillKey: 'authorHasTraveledTo' },
        BRA: colors((Math.random() * 50).toString()),
        CAN: colors((Math.random() * 50).toString()),
        ZAF: colors((Math.random() * 50).toString()),
        IND: colors((Math.random() * 50).toString()),
      });
    }, 2000);

    this.recoveryTrendHeight = this.recoveryTrendDiv.nativeElement.offsetHeight
    this.deathTrendHeight = this.deathTrendDiv.nativeElement.offsetHeight

    this.aggregateService.subscribe(AggregateDataType.recoveryTrend, (data) => {
      if (data) {
        this.currentTrendData = data
        this.drawTrend()
      }
    })

    this.aggregateService.subscribe(AggregateDataType.latestRecovery, (data) => {
      if (data) {
        this.latestRecoveryData = data
        if (this.latestRecoveryData['global']) {
          this.topTenColumns = []
          this.topTenRows = []

          let obj = []
          const keys = Object.keys(this.latestRecoveryData['global'])
          obj.push({prop: 'country', sortable: true})
          keys.forEach(key => {
            obj.push({
              prop: key,
              sortable: true
            })
          })
          this.topTenColumns = obj

          this.topTenRows = Object.keys(this.latestRecoveryData).map(country => {
            let object = {
              country
            }
            keys.forEach(key => {
              object[key] = (this.latestRecoveryData[country][key]).toFixed(2)
            })
            return object
          })
        }
      }
    })
  }

  drawTrend(countryCode = 'global') {

    if (this.deathChart && this.recoveryChart) {
      this.deathChart.destroy()
      this.recoveryChart.destroy()
    }

    const dateLabel = Object.keys(this.currentTrendData[countryCode].vsConfirmed)
        const trendConfirmed = []
        const trendDeath = []
        dateLabel.forEach((date) => {
          trendConfirmed.push(this.currentTrendData[countryCode].vsConfirmed[date])
          trendDeath.push(this.currentTrendData[countryCode].vsDeath[date])
        })
  
        var ctx = document.getElementById('recoveryTrend')
        ctx.innerHTML = ""
        this.recoveryChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: dateLabel,
            datasets: [{
              label: 'Recovered vs Confirmed 30 Day Trend',
              data: trendConfirmed,
              backgroundColor: 'rgba(0, 63, 76, 0.2)',
              borderWidth: 1
            },
            ]
          },
          options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
              labels: {
                fontColor: 'black'
              }
            },
            maintainAspectRatio: false,
          }
        })

        var ctx = document.getElementById('deathTrend')
        ctx.innerHTML = ""
        this.deathChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: dateLabel,
            datasets: [{
              label: 'Recovered vs Death 30 Day Trend',
              data: trendDeath,
              backgroundColor: 'rgba(11, 156, 49, 0.2)',
              borderWidth: 1
            },
            ]
          },
          options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
              labels: {
                fontColor: 'black'
              }
            },
            maintainAspectRatio: false,
          }
        })
  }

}
