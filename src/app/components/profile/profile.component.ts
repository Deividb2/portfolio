import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { diHtml5Plain as html, diCss3Plain as css, diJavascriptPlain as js, diAngularjsPlain as angular, diTypescriptPlain as ts } from '@ng-icons/devicon/plain';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({
    html, css, js, angular, ts
  })],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
