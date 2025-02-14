import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { SideBarModule } from './features/shared/ui/sidebard/sidebar.module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    FeaturesModule,
    SideBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mobitsolucoes-front';
}
