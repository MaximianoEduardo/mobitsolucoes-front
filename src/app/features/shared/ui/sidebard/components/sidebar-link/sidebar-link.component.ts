import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ){}

  handleClick(){
    this.router.navigateByUrl(this.link!.href)
  }

}
