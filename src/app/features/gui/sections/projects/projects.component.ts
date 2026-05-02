import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, FolderGit2 } from 'lucide-angular';
import { PROJECTS } from '../../../../core/data/content';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = PROJECTS;
  
  readonly ExternalLinkIcon = ExternalLink;
  readonly GithubIcon = Github;
  readonly FolderGit2Icon = FolderGit2;
}
