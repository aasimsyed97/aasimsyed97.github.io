import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronRight, Code } from 'lucide-angular';
import { PROFILE } from '../../../../core/data/content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  @Output() navigate = new EventEmitter<string>();

  profile = PROFILE;
  terminalText = '';
  fullText = '> building scalable APIs...';
  readonly ChevronRightIcon = ChevronRight;
  readonly CodeIcon = Code;
  highlights = ['Microservices', 'Performance Optimization', 'Distributed Systems'];
  
  private timer: any;

  ngOnInit(): void {
    let i = 0;
    this.timer = setInterval(() => {
      if (i < this.fullText.length) {
        this.terminalText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(this.timer);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  onNavigate(section: string): void {
    this.navigate.emit(section);
  }
}
