import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-grid',
  imports: [],
  templateUrl: './cards-grid.component.html',
  styleUrl: './cards-grid.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          borderRadius:'16px',
          backgroundColor: 'rgb(244, 244, 245)'
        })
      ),
      state(
        'closed',
        style({
          borderRadius:'16px',
          border: '1px solid rgb(244, 244, 245)',
          backgroundColor: 'white'
        })
      ),
      transition('true => false', [animate('1s easeOutCirc')])
    ])
  ]
})
export class CardsGridComponent {

  @Input() title: string = '';
  @Input() value: number = 0;
  open: boolean  = false;

  handleOver(){
    this.open = !this.open;
  }
  
}
