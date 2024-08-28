import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault()

    alert("Sabia que vc ia clicar aí. Ainda não programei isso, gatinha")
  }
}
