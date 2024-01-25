import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HermanoComponent } from './hermano/hermano.component';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, HermanoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'curso-angular-youtube';
}
