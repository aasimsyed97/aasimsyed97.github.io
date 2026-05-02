import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Github, Linkedin, MapPin, Send } from 'lucide-angular';
import { PROFILE } from '../../../../core/data/content';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  profile = PROFILE;

  readonly MailIcon = Mail;
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly MapPinIcon = MapPin;
  readonly SendIcon = Send;
}
