import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModeSelectionComponent } from './features/mode-selection/mode-selection.component';
import { TerminalComponent } from './features/terminal/terminal.component';
import { GuiModeComponent } from './features/gui/gui-mode/gui-mode.component';

type AppMode = 'selection' | 'gui' | 'terminal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModeSelectionComponent, TerminalComponent, GuiModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mode: AppMode = 'selection';

  setMode(newMode: 'gui' | 'terminal' | 'selection') {
    this.mode = newMode;
  }
}
