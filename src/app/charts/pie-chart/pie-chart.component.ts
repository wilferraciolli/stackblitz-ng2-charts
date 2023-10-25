import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Download Sales', 'In Store', 'Mail Sales'];

  public pieChartDatasets = [
    {
      label: 'Label for the whole chart',
      labels: this.pieChartLabels,
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
      // innerRadius: '90%',
      // borderRadius: 'round',
    },
  ];

  // public barChartType: ChartType = 'pie';
  // public pieChartDatasets2 = {
  //   labels: this.barChartLabels,
  //   datasets: [
  //     {
  //       label: 'Title label',
  //       data: [5, 3, 1],
  //       backgroundColor: ['red', 'green', 'blue'],
  //       hoverBackgroundColor: ['darkred', 'darkgreen', 'darkblue'],
  //     },
  //   ],
  // };

  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
