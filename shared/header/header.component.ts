import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { faUser, faBell,faEnvelope , faCircleUser , faGear} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  drawerWidth = '16%';
  userName = 'Peter Parker';
  userStatus = 'Online';
  notificationCount = 1;

  faUser = faUser;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faCircleUser = faCircleUser;
  faGear = faGear;
}
