import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FamiliaService } from '../familia.service';
import { FamiliaEstilosDirective } from '../familia-estilos.directive';
import { PrimerPipePipe } from '../primer-pipe.pipe';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [ButtonModule, FamiliaEstilosDirective, PrimerPipePipe],
  templateUrl: './hermano.component.html',
  styles: ``,
})
export class HermanoComponent implements OnInit {
  _familiaService = inject(FamiliaService);
  name = '';

  ngOnInit(): void {
    this._familiaService.setHermanoPequeño('Juan');
    this.name = this._familiaService.getHermanoPequeño();
  }

  saludarHermanoGrande() {
    const hermanoGrande = this._familiaService.getHermanoGrande();
    console.log(this._familiaService.saludar(hermanoGrande));
  }
  preguntarPorHijo() {
    const hermanoGrande = this._familiaService.getHermanoGrande();
    console.log(this._familiaService.preguntarPorHijo(hermanoGrande));
  }
}
