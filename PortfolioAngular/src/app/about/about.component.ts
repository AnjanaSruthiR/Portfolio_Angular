import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

interface Testimonial {
  name: string;
  position: string;
  content: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInState', [
      state('out', style({ opacity: 0 })),
      state('in', style({ opacity: 1 })),
      transition('out => in', animate('500ms ease-in'))
    ]),
    trigger('staggerServiceCards', [
      transition(':enter', [
        query('.service-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(300, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('accordionAnimation', [
      state('closed', style({ maxHeight: '0', opacity: 0, padding: '0 1rem' })),
      state('open', style({ maxHeight: '1500px', opacity: 1, padding: '1rem' })),
      transition('closed <=> open', animate('2000ms ease-in-out'))
    ]),
    trigger('testimonialAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
        animate('2000ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class AboutComponent implements AfterViewInit {

  introInView = false;
  servicesInView = false;
  accordionInView = false;
  testimonialsInView = false;

  @ViewChild('introSection') introSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('accordionSection') accordionSection!: ElementRef;
  @ViewChild('testimonialsSection') testimonialsSection!: ElementRef;

  services = [
    { icon: 'fas fa-laptop-code', title: 'Software Development', description: 'I build responsive user-centric apps with modern frameworks.' },
    { icon: 'fas fa-shield-alt', title: 'Security Engineering', description: 'I design scalable IAM solutions ensuring secure data access.' },
    { icon: 'fas fa-globe', title: 'Web Development', description: 'I create dynamic, high-performance web apps with exceptional UI/UX.' }
  ];
  
  educationList = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University, Boston, MA",
      logo: "./assets/Education /NEU.png", 
      cgpa: "3.8/4.0",
      description: [
        "Data Management and Database Design",
        "Application Engineering and Development",
        "Program Structures and Algorithms",
        "Web Design and User Experience",
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Sri Venkateswara Engineering College for Women, India",
      logo: "./assets/Education /SVEW.png", 
      cgpa: "7.89/10.0",
      description: [
        "Discrete Mathematics",
        "Principles of Programming Languages",
        "Database Management Systems",
        "Object Oriented Programming",
        "AI & ML",
        "Cloud computing"
      ]
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Yogendranath Gujarathi',
      position: 'Senior Manager at Accenture',
      content: `"I’m delighted to recommend Anjana Sruthi Ranga. I worked closely with her at Accenture, where she excelled as an Application Developer. 
Anjana consistently showcased strong analytical skills, creativity, and exceptional talent in application design with meticulous attention to detail. She’s proactive, collaborative, and brings a positive attitude to every team. Anjana’s commitment and talent make her an exceptional candidate for any professional pursuit."`
    },
    {
      name: 'Praise Shimosha',
      position: 'Consulting Development Analyst at Accenture',
      content: `"I had the pleasure of working on a project with Anjana for over a year at Accenture, where I served as the business analyst while Anjana was a member of our development team. During our time on the project, Anjana consistently demonstrated exceptional coding skills and the ability to effectively communicate with stakeholders to resolve issues. She excelled in team collaboration and took on the responsibility of leading other junior developers, eventually becoming the lead support developer for our team's project.
On a personal level, Anjana is highly responsible, quick to grasp complex problems, and open to constructive criticism and making necessary changes. Her flexibility in adapting to changing situations is commendable. I would highly recommend Anjana as a great candidate for any role!"`
    }
  ];

  isOpen: boolean = false;
  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    const options = { threshold: 0.2 };

    const introObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.introInView = true;
          introObserver.unobserve(entry.target);
        }
      });
    }, options);
    if (this.introSection) {
      introObserver.observe(this.introSection.nativeElement);
    }

    const servicesObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.servicesInView = true;
          servicesObserver.unobserve(entry.target);
        }
      });
    }, options);
    if (this.servicesSection) {
      servicesObserver.observe(this.servicesSection.nativeElement);
    }

    const accordionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.accordionInView = true;
          accordionObserver.unobserve(entry.target);
        }
      });
    }, options);
    if (this.accordionSection) {
      accordionObserver.observe(this.accordionSection.nativeElement);
    }

    const testimonialsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.testimonialsInView = true;
          testimonialsObserver.unobserve(entry.target);
        }
      });
    }, options);
    if (this.testimonialsSection) {
      testimonialsObserver.observe(this.testimonialsSection.nativeElement);
    }
  }
}