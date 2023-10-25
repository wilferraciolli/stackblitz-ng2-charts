import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PieChartComponent } from './app/charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './app/charts/doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, PieChartComponent, DoughnutChartComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-doughnut-chart />
     <app-pie-chart />

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
