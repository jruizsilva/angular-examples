import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './hijo.component.html',
  styles: ``,
})
export class HijoComponent {
  @Output() sendMessageEmitter = new EventEmitter();
  @Output() decrementarEmitter = new EventEmitter();
  @Output() incrementarEmitter = new EventEmitter();
  @Input() fatherData = '';
  message = '';

  sendMessage() {
    this.sendMessageEmitter.emit(this.message);
  }

  decrementar() {
    this.decrementarEmitter.emit();
  }
  incrementar() {
    this.incrementarEmitter.emit();
  }
}
