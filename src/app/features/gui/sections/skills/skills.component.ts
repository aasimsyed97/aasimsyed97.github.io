import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../../../core/data/content';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills = SKILLS;
}
