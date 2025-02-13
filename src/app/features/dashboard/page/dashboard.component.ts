import { Component } from '@angular/core';
import { SideBarModule } from '../../shared/ui/sidebard/sidebar.module';

@Component({
  selector: 'app-dashboard',
  imports: [SideBarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
