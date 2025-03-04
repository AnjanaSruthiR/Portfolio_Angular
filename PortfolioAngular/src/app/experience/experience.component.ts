import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceList = [
    {
      title: "APPLICATION DEVELOPER",
      company: "Accenture",
      logo: "./assets/Experience/accenture-icon.png",
      dates: "Oct 22 - Jul 24",
      description: "I orchestrated front-end development for 15 cross-platform apps in 17 languages, ensuring seamless multi-device performance. I designed engaging UI/UX using HTML, CSS, and jQuery—integrating social logins and SSO to maintain brand consistency and code efficiency while coordinating cross-functional testing to resolve responsiveness and SSO issues. I standardized feature-level workflows and documented process changes to ensure clear, robust procedures.",
      skills : ['CSS3', 'HTML5', 'Responsive Web Design', 'JQuery'],
      isFlipped: false
    },
    {
      title: "SECURITY ENGINEER",
      company: "Accenture",
      logo: "./assets/Experience/accenture-icon.png",
      dates: "May 23 - Jul 24",
      description: "I collaborated with the IAM team to securely integrate 10 client apps into Okta via OIDC. I provisioned user access, configured MFA with Okta Verify, and managed user profiles for enhanced security. I implemented a strategy to manage backlog login incidents, reducing resolution time by 60%. I streamlined login workflows during Okta launches, improving onboarding efficiency and reducing support tickets.",      
      skills : ['IAM', 'Okta', 'SAML', 'OIDC', 'ServiceNow'],
      isFlipped: false
    }
  ];

  isMobile: boolean = window.innerWidth <= 767;

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 767;
    });
  }
}