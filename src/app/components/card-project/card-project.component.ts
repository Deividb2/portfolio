import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProjects } from '../../../assets/interfaces/projects.interface';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input() dataCard!: IProjects;
}
