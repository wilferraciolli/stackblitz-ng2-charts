import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import {
  ChartData,
  ChartOptions,
  ChartType,
  ChartConfiguration,
} from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  //  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //      { data: [ 350, 450, 100 ], label: 'Series A' },
  //      { data: [ 50, 150, 120 ], label: 'Series B' },
  //      { data: [ 250, 130, 70 ], label: 'Series C' }
  //    ];

  public doughnutChartDatasets = [
    {
      label: 'Label for the whole chart',
      labels: this.doughnutChartLabels,
      data: [300, 500, 100],
      backgroundColor: ['red', 'blue', 'green'],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
      ],
      hoverBackgroundColor: [
        'rgba(0, 0, 0, .5)',
        'rgba(0, 0, 0, .5)',
        'rgba(0, 0, 0, .1)',
      ],

      borderWidth: 3,
      spacing: 10, // used to add space between bars
      //offset: 50, // used to add space between bars
      borderRadius: 15,

      barPercentage: 5,
      circumference: 180, // used to make half doughnut
      rotation: 270, // used to make half doughnut

      // weight: 1,

      // innerRadius: '90%',,
      // borderJoinStyle: 'round',
    },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: 90, // the thickness of the arc
  };

  constructor() {}

  ngOnInit() {}
}
