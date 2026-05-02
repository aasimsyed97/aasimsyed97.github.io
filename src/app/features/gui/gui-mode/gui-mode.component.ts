import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../sections/home/home.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-gui-mode',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HomeComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ExperienceComponent, 
    ContactComponent
  ],
  templateUrl: './gui-mode.component.html'
})
export class GuiModeComponent {
  @Output() switchMode = new EventEmitter<void>();
  
  currentSection = 'Home';

  onSectionChange(section: string): void {
    this.currentSection = section;
  }

  onSwitchMode(): void {
    this.switchMode.emit();
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
