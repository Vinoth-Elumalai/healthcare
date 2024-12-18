import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CardComponent } from '../../../shared/card/card.component';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  cardContent = [
    {
      title: 'Visitors',
      value: '4,592',
      percentage: '+ 15.67 %',
      description:
        'Monitor visitor numbers to stay updated on web and onsite traffic. Get insights into daily, weekly, or monthly trends.',
      Icon: 'PersonOutlineOutlinedIcon',
    },
    {
      title: 'Doctors',
      value: '260',
      percentage: '+ 15.67 %',
      description:
        'Track the number of active doctors in your hospital. Ensure staffing meets patient needs efficiently.',
      Icon: 'EarbudsOutlinedIcon',
    },
    {
      title: 'Patients',
      value: '540',
      percentage: '+ 15.67 %',
      description:
        'Stay updated on the number of admitted patients. Improve patient flow and resource allocation.',
      Icon: 'PeopleAltOutlinedIcon',
    },
    {
      title: 'Total Beds',
      value: '1205',
      percentage: '+ 15.67 %',
      description:
        'Monitor the total beds available for patient care. Ensure optimal occupancy and resource management.',
      Icon: 'HotelIcon',
    },
  ];

  selectedCard: number | null = null;

  handleCardClick(index: number): void {
    this.selectedCard = index;
    console.log(`Card ${index} clicked`);
  }
}
