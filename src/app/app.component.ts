import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesModule } from './features/features.module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    FeaturesModule, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mobitsolucoes-front';
}
