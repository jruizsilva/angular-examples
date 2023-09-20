import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {
  name = new FormControl('', [
    Validators.minLength(4),
    Validators.required
  ])
  checkboxIsChecked = new FormControl(false)
}
