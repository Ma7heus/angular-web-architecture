import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from '../../../architecture-core/src/lib/test-component/test-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TestComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
}
