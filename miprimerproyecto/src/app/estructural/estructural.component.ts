import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss'],
})
export class EstructuralComponent implements OnInit {
  isError = false;
  // sections = [
  //   'Intro',
  //   'Usos angular',
  //   'instalacion del entorno',
  //   'cli',
  //   'componentes',
  // ];
  sections = [{ id: 1, name: 'Introduccion', duracion: '10min' }];

  ngOnInit(): void {
    setTimeout(() => {
      this.sections = [
        ...this.sections,
        { id: 2, name: 'Usos de Angular', duracion: '5min' },
        { id: 3, name: 'Instalacion de entorno', duracion: '9min' },
      ];
    }, 4000);
  }

  showError() {
    this.isError = !this.isError;
  }
}
