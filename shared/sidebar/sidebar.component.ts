import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import {
  faUser,
  faBell,
  faEnvelope,
  faCircleUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  drawerWidth = '16%';
  faBell = faBell;

  sidebarItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Your Account', icon: 'person', route: '/profile' },
  ];

  sidebarApplications = [
    { name: 'Doctor', icon: 'message', route: '/messages' },
    { name: 'Patient', icon: 'notifications', route: '/notifications' },
    { name: 'Department', icon: 'notifications', route: '/notifications' },
    { name: 'Schedule', icon: 'notifications', route: '/notifications' },
    { name: 'Appointment', icon: 'notifications', route: '/notifications' },
    { name: 'Report', icon: 'notifications', route: '/notifications' },
    { name: 'Human Resorces', icon: 'notifications', route: '/notifications' },
    { name: 'Bed Manager', icon: 'notifications', route: '/notifications' },
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
