import { Component, Input } from '@angular/core';

export interface linkInterface {
  label: string,
  href: string,
  icon: string | null
}


@Component({
  selector: 'app-sidebar-link',
  imports: [],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css'
})
export class SidebarLinkComponent {
  @Input() link: linkInterface | undefined
}
