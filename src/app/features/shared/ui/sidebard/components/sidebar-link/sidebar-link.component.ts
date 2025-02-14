import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface linkInterface {
  label: string,
  href: string,
  icon: string
}


@Component({
  selector: 'app-sidebar-link',
  imports: [MatIconModule, CommonModule],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css'
})
export class SidebarLinkComponent {
  @Input() link: linkInterface | undefined
}
