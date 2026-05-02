import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Monitor, Terminal } from 'lucide-angular';
import { PROFILE } from '../../core/data/content';

@Component({
  selector: 'app-mode-selection',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './mode-selection.component.html',
})
export class ModeSelectionComponent implements OnInit, OnDestroy {
  @Output() selectMode = new EventEmitter<'gui' | 'terminal'>();
  
  profileName = PROFILE.name;
  timeLeft = 4;
  readonly MonitorIcon = Monitor;
  readonly TerminalIcon = Terminal;
  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.selectMode.emit('gui');
        clearInterval(this.timer);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  onSelectMode(mode: 'gui' | 'terminal'): void {
    this.selectMode.emit(mode);
  }
}
