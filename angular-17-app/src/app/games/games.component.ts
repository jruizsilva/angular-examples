import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [UserComponent],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Halo',
    },
    {
      id: 2,
      name: 'Mario',
    },
    {
      id: 3,
      name: 'Zelda',
    },
    {
      id: 4,
      name: 'Super Mario',
    },
  ];
}
