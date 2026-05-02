import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar } from 'lucide-angular';
import { EXPERIENCE } from '../../../../core/data/content';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experience = EXPERIENCE;

  readonly BriefcaseIcon = Briefcase;
  readonly CalendarIcon = Calendar;
}
