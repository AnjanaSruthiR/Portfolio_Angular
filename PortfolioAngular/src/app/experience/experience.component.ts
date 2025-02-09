import { Component } from '@angular/core';

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
      description: "Orchestrated front-end for 15 cross-platform apps in 17 languages ensuring seamless multi-device performance. Designed UI/UX with HTML, CSS, and jQuery, integrating social logins and SSO, ensuring brand adherence and code efficiency. Coordinated cross-functional alpha and beta testing, troubleshooting responsiveness bugs, resolving SSO rate-limit issues, and ensuring minimal-defect releases. Standardized feature-level workflows. Investigated, resolved, and documented process changes to ensure well defined documentation",
      skills : ['CSS3', 'HTML5', 'Responsive Web Design', 'JQuery']
    },
    {
      title: "SECURITY ENGINEER",
      company: "Accenture",
      logo: "./assets/Experience/accenture-icon.png",
      dates: "May 23 - Jul 24",
      description: "Collaborated with the IAM team to securely integrate 10 client applications into Okta using OIDC. Provisioned user access for newly released applications, configured multi-factor authentication via Okta Verify, and administered user profiles to enhance authentication security. Developed and implemented a process improvement strategy to manage backlog login incident troubleshooting tickets, reducing average resolution time by 60%.Streamlined login workflows during Okta application launches, enhancing onboarding efficiency and reducing support ticket volume.",      
      skills : ['IAM', 'Okta', 'SAML', 'OIDC', 'ServiceNow']

    }
  ];
}