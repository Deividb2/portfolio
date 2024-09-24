import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { radixGithubLogo as gitHub, radixLinkedinLogo as linkedin } from '@ng-icons/radix-icons';
import { tablerMail as email, tablerBrandWhatsapp as whatsapp } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({
    gitHub, email, linkedin, whatsapp
  })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
