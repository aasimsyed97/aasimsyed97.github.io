import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Terminal } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() currentSection = 'Home';
  @Output() sectionChange = new EventEmitter<string>();
  @Output() switchMode = new EventEmitter<void>();

  navItems = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];
  readonly TerminalIcon = Terminal;

  onSectionChange(section: string): void {
    this.sectionChange.emit(section);
  }

  onSwitchMode(): void {
    this.switchMode.emit();
  }
}
