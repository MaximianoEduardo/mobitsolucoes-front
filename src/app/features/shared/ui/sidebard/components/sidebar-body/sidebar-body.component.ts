import { Component } from '@angular/core';
import { linkInterface, SidebarLinkComponent } from "../sidebar-link/sidebar-link.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-body',
  imports: [SidebarLinkComponent, CommonModule, ],
  templateUrl: './sidebar-body.component.html',
  styleUrl: './sidebar-body.component.css'
})
export class SidebarBodyComponent {

  links: linkInterface[] = [
    {
      label: "Dashboard",
      href: "#",
      icon: "dashboard",
    },
    {
      label: "Planos",
      href: "#",
      icon: "event_note"  ,
    },
    {
      label: "Clientes",
      href: "#",
      icon: "manage_accounts",
    },
    {
      label: "Clientes a Planos",
      href: "#",
      icon: "swipe_vertical",
    },
  ];

}
