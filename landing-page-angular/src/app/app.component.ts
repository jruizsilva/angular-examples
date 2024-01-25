import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent implements OnInit {
  title = 'landing-page-angular';
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'label 1' },
      { label: 'label 2' },
      { label: 'label 3' },
    ];
  }
}
