import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FamiliaService {
  hermanoPequeño = '';
  hermanoGrande = '';

  getHermanoPequeño() {
    return this.hermanoPequeño;
  }
  setHermanoPequeño(hermanoPequeño: string) {
    this.hermanoPequeño = hermanoPequeño;
  }
  getHermanoGrande() {
    return this.hermanoGrande;
  }
  setHermanoGrande(hermanoGrande: string) {
    this.hermanoGrande = hermanoGrande;
  }

  saludar(hermano: string) {
    return `Hola ${hermano}`;
  }

  preguntarPorHijo(hermano: string) {
    return `¿Como esta tu hijo ${hermano}?`;
  }
}
