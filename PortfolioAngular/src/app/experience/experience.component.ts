import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceList = [
    {
      title: "Security Engineer",
      company: "Accenture",
      logo: "/assets/Experience/accenture-icon.png",
      dates: "May 23 - Jul 24",
      description: " Enhanced Identity and Access Management (IAM) capabilities by integrating applications using Okta, effectively reducing security vulnerabilities and ensuring compliance within the AXON project. Implemented SSO with SAML 2.0, OIDC, and MFA using Okta Verify, strengthening security protocols. Fortified security frameworks by proactively identifying vulnerabilities, implementing robust authentication protocols, and streamlining user access processes. These initiatives eradicated critical security gaps, reduced support incidents by 30\%, and ensured compliance with industry standards, delivering an unparalleled secure experience",
      skills : ['IAM', 'Okta', 'SAML', 'OIDC', 'ServiceNow']
    },
    {
      title: "Application Developer",
      company: "Accenture",
      logo: "/assets/Experience/accenture-icon.png",
      dates: "May 23 - Jul 24",
      description: "Conceptualized and executed dynamic applications across mobile, desktop, and tablet platforms using HTML, CSS, and jQuery. Pioneered responsive design strategies to deliver visually captivating and highly functional applications, streamlining usability across devices. Collaborating with stakeholders and leading rigorous testing phases, delivered bug-free, scalable solutions ahead of deadlines, significantly amplifying user engagement and business efficiency.",      
      skills : ['CSS3', 'HTML5', 'Responsive Web Design', 'JQuery']
    },
    {
      title: "Web Application Developer",
      company: "Accenture",
      logo: "/assets/Experience/accenture-icon.png",
      dates: "Oct 22 - Dec 22",
      description: "Spearheaded the development and refinement of the Pizzeria application, collaborating closely with the team throughout its lifecycle. Engineered robust web solutions with ExpressJS and NodeJS, designed intuitive interfaces using HTML and CSS, and optimized database management with MongoDB.",
      skills : ['AngularJS', 'SCSS', 'HTML5', 'Typescript', 'Nodejs']
    }
  ];
}