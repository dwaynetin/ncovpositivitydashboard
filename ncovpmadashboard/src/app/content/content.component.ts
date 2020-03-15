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
        Object.keys(data).forEach(country => {
          if (data[country].vsConfirmed === 0 && data[country].vsDeath === 0) {
            delete data[country]
          }
        })
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

          var colors = 
          d3.scale.linear()
         .domain([d3.min(this.topTenRows.map(info => info.vsConfirmed)),d3.max(this.topTenRows.map(info => info.vsConfirmed))])
          .range(["red", "green"]);
          
          // d3.scale.linear(d3.interpolateBlues)
          // .domain([d3.min(this.topTenRows.map(info => info.vsConfirmed)), d3.max(this.topTenRows.map(info => info.vsConfirmed))]);
          
          const transformedObject = {}
          const fillKeys = {}

          this.topTenRows.forEach(data => {
            if (data.country !== 'global') {
              const countryCode = this.aggregateService.mappedToCode.find(mapped => mapped.name === data.country).code
              const fill = {
                fillKey: countryCode,
                value: data.vsDeath,
                value2: data.vsConfirmed
              }
              transformedObject[countryCode] = fill
              fillKeys[countryCode] = colors(fill.value)
            }
          })
          fillKeys['defaultFill'] = "rgba(0,0,0,0.2)"
          var basic_choropleth = new Datamap({
            element: document.getElementById("basic"),
            projection: 'mercator',
            responsive: false,
            geographyConfig: {
              highlightBorderColor: 'rgba(0,0,0,0.5)',
              highlightFillColor: '#eee',
             popupTemplate: function(geography, data) {
                return `<div class="hoverinfo">${geography.properties.name } <br>Recovery vs Death: ${data.value}<br> Recovery vs Confirmed: ${data.value2}</div>`
              },
              highlightBorderWidth: 3
            },
            fills: fillKeys,
            data: transformedObject
          });
        }
      }
    })
  }

  drawTrend(countryCode = 'global') {

    if (this.deathChart && this.recoveryChart) {
      this.deathChart.destroy()
      this.recoveryChart.destroy()
      document.getElementById('recoveryTrend').style.height = this.recoveryTrendHeight
      document.getElementById('deathTrend').style.height = this.deathTrendHeight
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
