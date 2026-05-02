import { Component, EventEmitter, Output, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE } from '../../core/data/content';

interface CommandHistory {
  command: string;
  outputHTML?: string;
  isComponent?: boolean;
  type?: 'help' | 'about' | 'skills' | 'projects' | 'experience' | 'contact' | 'error';
  cmdInput?: string;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html'
})
export class TerminalComponent implements OnInit, AfterViewChecked {
  @Output() switchMode = new EventEmitter<void>();
  
  @ViewChild('bottomRef') bottomRef!: ElementRef;
  @ViewChild('inputRef') inputRef!: ElementRef;

  input = '';
  history: CommandHistory[] = [];

  profile = PROFILE;
  skills = SKILLS;
  projects = PROJECTS;
  experience = EXPERIENCE;

  ngOnInit(): void {
    this.history = [
      {
        command: '',
        type: 'help', // using 'help' to trigger initial text, or just outputHTML
        outputHTML: `
          <div class="text-slate-400 mb-4">
            <div>Welcome to ${this.profile.name}'s Interactive Terminal.</div>
            <div>Type <span class="text-sky-400">help</span> to see available commands.</div>
          </div>
        `
      }
    ];
    setTimeout(() => this.focusInput(), 100);
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  focusInput(): void {
    if (this.inputRef && this.inputRef.nativeElement) {
      this.inputRef.nativeElement.focus();
    }
  }

  scrollToBottom(): void {
    if (this.bottomRef && this.bottomRef.nativeElement) {
      this.bottomRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleCommand(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const cmd = this.input.trim().toLowerCase();
    this.input = '';

    if (!cmd) return;

    let outputType: CommandHistory['type'] = 'error';
    let outputHTML = '';

    switch (cmd) {
      case 'help':
        outputType = 'help';
        break;
      case 'about':
        outputType = 'about';
        break;
      case 'skills':
        outputType = 'skills';
        break;
      case 'projects':
        outputType = 'projects';
        break;
      case 'experience':
        outputType = 'experience';
        break;
      case 'contact':
        outputType = 'contact';
        break;
      case 'clear':
        this.history = [];
        return;
      case 'gui':
        this.switchMode.emit();
        return;
      default:
        outputType = 'error';
        outputHTML = `<div class="text-red-400">Command not found: ${cmd}. Type 'help' for available commands.</div>`;
    }

    this.history.push({
      command: cmd,
      type: outputType,
      cmdInput: cmd,
      outputHTML: outputHTML
    });
  }
}
