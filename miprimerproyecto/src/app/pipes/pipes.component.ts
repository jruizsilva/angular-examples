import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  name = 'Kevin';
  apellido = 'HOLARUIZ';
  date = '2023-09-19T23:43:24.708Z';
  estado = 0;
  changeState() {
    console.log('Funcion ejecutandose...');
    this.estado = this.estado === 0 ? 1 : 0;
  }
}
