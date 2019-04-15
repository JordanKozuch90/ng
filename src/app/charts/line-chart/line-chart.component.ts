import { LINE_CHART_COLORS } from './../../shared/chart.colors';
import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[]=[
  {data:[21,14,25,24,22,33],label: 'Sentiment Analysis'},
  {data:[21,34,15,22,12,30],label: 'Image Recognition'},
  {data:[31,24,21,32,14,25],label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan','Feb','Mar','May','Jun']


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions:any={
    responsive:true,
    maintainAspectRatio:false
  };
  lineChartLegend=true;
  lineChartType='line';
  lineChartColors=LINE_CHART_COLORS;

  ngOnInit() {
  }

}
