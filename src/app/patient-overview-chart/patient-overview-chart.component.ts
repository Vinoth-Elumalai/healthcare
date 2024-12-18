import { Component, OnInit } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { getLoungeData, getOfficeData } from './patient-overview-chart.constant';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-patient-overview-chart',
  standalone: true,
  imports: [AgCharts, FullCalendarModule],
  templateUrl: './patient-overview-chart.component.html',
  styleUrl: './patient-overview-chart.component.css'
})
export class PatientOverviewChartComponent implements OnInit {
  public options: AgChartOptions;
  calendarOptions: CalendarOptions = {} as CalendarOptions;
  constructor() {
    this.options = {
      series: [
        {
          data: getLoungeData(),
          xKey: "time",
          yKey: "sensor",
          yName: "On Time",
        },
        {
          data: getOfficeData(),
          xKey: "time",
          yKey: "sensor",
          yName: "On Late",
        },
      ],
      axes: [
        {
          type: 'time',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
        }
      ],
      legend: { enabled: false }
    };
  }
  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth', // Default view: month view
      aspectRatio: 0.5,
      height: '390px',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay', // Toolbar buttons
      },
      events: [
        { title: 'Event 1', date: '2024-12-20' },
        { title: 'Event 2', date: '2024-12-25' },
        { title: 'Event 3', date: '2024-12-30' }
      ],
      editable: true, // Enable event editing (drag and drop)
      droppable: true, // Enable event dragging
    };
  }




}
