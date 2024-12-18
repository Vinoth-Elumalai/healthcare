import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOverviewChartComponent } from './patient-overview-chart.component';

describe('PatientOverviewChartComponent', () => {
  let component: PatientOverviewChartComponent;
  let fixture: ComponentFixture<PatientOverviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientOverviewChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientOverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
