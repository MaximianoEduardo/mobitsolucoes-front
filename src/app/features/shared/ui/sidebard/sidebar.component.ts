import { Component } from '@angular/core';
import { SidebarBodyComponent } from "./components/sidebar-body/sidebar-body.component";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarBodyComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '200px'
        })
      ),
      state(
        'closed',
        style({
          width: "150px"
        })
      ),
      transition('true => false', [animate('1s easeOutCirc')]),
    ]),
    

  ]
})
export class SidebardComponent {
  constructor(){

  }

  open: boolean  = false;

  setOpen() {
    this.open = !this.open;
  }

}
