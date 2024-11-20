import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { radixGithubLogo as gitHub, radixLinkedinLogo as linkedin } from '@ng-icons/radix-icons';
import { tablerMail as email, tablerBrandWhatsapp as whatsapp } from '@ng-icons/tabler-icons';
import { INetworks } from '../../../assets/interfaces/networks.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({
    gitHub, email, linkedin, whatsapp
  })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  openLink(link: string) {
    window.open(link)
  }

  networks: Array<INetworks> = [
    {
      name: 'GitHub',
      iconName: 'gitHub',
      linkNetWork: 'https://github.com/Deividb2'
    },
    {
      name: 'Email',
      iconName: 'email',
      linkNetWork: 'mailto:deividbarreto57@gmail.com'
    },
    {
      name: 'Linkedin',
      iconName: 'linkedin',
      linkNetWork: 'https://www.linkedin.com/in/deividbarretocruz'
    },
    {
      name: 'Whatsapp',
      iconName: 'whatsapp',
      linkNetWork: 'https://wa.me/5521977201714'
    },
  ]
}