import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FamiliaService } from '../familia.service';
import { HijoComponent } from '../hijo/hijo.component';
import { FamiliaEstilosDirective } from '../familia-estilos.directive';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [ButtonModule, HijoComponent, FamiliaEstilosDirective],
  templateUrl: './padre.component.html',
  styles: ``,
})
export class PadreComponent implements OnInit {
  contador: number = 0;
  data = 'data recibida desde el padre';
  mensajeRecibido = '';
  _familiaService = inject(FamiliaService);
  name = '';

  ngOnInit(): void {
    this._familiaService.setHermanoGrande('Pedro');
    this.name = this._familiaService.getHermanoGrande();
  }

  recibirMensaje($messageReceived: string) {
    this.mensajeRecibido = $messageReceived;
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  saludarHermanoPequeno() {
    const hermanoGrande = this._familiaService.getHermanoPequeño();
    console.log(this._familiaService.saludar(hermanoGrande));
  }
  preguntarPorHijo() {
    const hermanoGrande = this._familiaService.getHermanoPequeño();
    console.log(this._familiaService.preguntarPorHijo(hermanoGrande));
  }
}
