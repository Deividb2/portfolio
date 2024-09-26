import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { radixGithubLogo as gitHub, radixLinkedinLogo as linkedin } from '@ng-icons/radix-icons';
import { tablerMail as email, tablerBrandWhatsapp as whatsapp, tablerMenu2 as menuOpen, tablerX as menuClose } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({
    gitHub, email, linkedin, whatsapp, menuOpen, menuClose
  })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  iconMenu: string = "menuOpen";
  hendleMenuProp: boolean = false;

  hendleMenu() {
    this.hendleMenuProp = !this.hendleMenuProp
    this.hendleMenuProp ? this.iconMenu = "menuClose" : this.iconMenu = "menuOpen" 
  }
}
