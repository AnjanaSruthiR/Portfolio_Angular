import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    // Scale Bounce for desktop cards:
    trigger('scaleBounce', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    // Flip Animation for mobile cards:
    trigger('flipAnimation', [
      transition(':enter', [
        style({ transform: 'rotateY(-180deg)', opacity: 0 }),
        animate('600ms ease-out',
          style({ transform: 'rotateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('experienceContainer') experienceContainer!: ElementRef;
  experiencesInView = false;

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

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.experiencesInView = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (this.experienceContainer) {
      observer.observe(this.experienceContainer.nativeElement);
    }
  }
}
