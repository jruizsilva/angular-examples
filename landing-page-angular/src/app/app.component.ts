import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent implements OnInit {
  title = 'landing-page-angular';
  items: { label: string }[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'label 1' },
      { label: 'label 2' },
      { label: 'label 3' },
    ];
  }
}
