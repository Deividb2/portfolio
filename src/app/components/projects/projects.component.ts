import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from '../../../assets/data/projects';

// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { diHtml5Plain as html, diCss3Plain as css, diJavascriptPlain as js, diAngularjsPlain as angular, diTypescriptPlain as ts } from '@ng-icons/devicon/plain';
import { tablerBrandReact as react } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  viewProviders: provideIcons({
    html, css, js, ts, angular, react
  }),
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  Projects = projects
}
