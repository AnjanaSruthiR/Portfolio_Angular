import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    // Overall fade in and slide up for the skills section.
    trigger('fadeInSkills', [
      state('out', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('out => in', animate('1000ms ease-out'))
    ]),
    // Stagger animation for each skill item.
    trigger('staggerSkillItems', [
      transition(':enter', [
        query('.skill-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit, AfterViewInit {

  skillsInView = false;
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  skills = [
    {
      name: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: 'javascript-plain' },
        { name: 'TypeScript', icon: 'typescript-plain' },
        { name: 'Java', icon: 'java-plain' }
      ]
    },
    {
      name: 'Frontend Development',
      items: [
        { name: 'AngularJS', icon: 'angularjs-plain' },
        { name: 'ReactJS', icon: 'react-plain' },
        { name: 'HTML5', icon: 'html5-plain' },
        { name: 'CSS3', icon: 'css3-plain' },
        { name: 'SASS', icon: 'sass-original' },
        { name: 'Bootstrap', icon: 'bootstrap-plain' }
      ]
    },
    {
      name: 'Backend Development',
      items: [
        { name: 'Node.js', icon: 'nodejs-plain' },
        { name: 'Express.js', icon: 'express-original' }
      ]
    },
    {
      name: 'Databases',
      items: [
        { name: 'MongoDB', icon: 'mongodb-plain' },
        { name: 'MySQL', icon: 'mysql-plain' }
      ]
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Figma', icon: 'figma-plain' },
        { name: 'Jira', icon: 'jira-plain' },
        { name: 'ServiceNow (SNOW)', icon: './assets/Skills/ServiceNow.png' },
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'Power BI', icon: 'assets/Skills/Power_BI.svg' },
        { name: 'NetBeans', icon: 'assets/Skills/NetBeans.svg.png' },
        { name: 'Azure Data Studio', icon: 'assets/Skills/azure-data-studio.png' },
        { name: 'VS Code', icon: 'assets/Skills/Visual_Studio_Code.svg.webp' },
        { name: 'Android Studio', icon: 'androidstudio-plain' },
        { name: 'MS Excel', icon: 'assets/Skills/Microsoft_Office_Excel.svg.webp' },
        { name: 'GitHub', icon: 'github-original' },
        { name: 'Bitbucket', icon: 'bitbucket-original' },
        { name: 'O365', icon: 'assets/Skills/Microsoft_365.svg.png' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.skillsInView = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (this.skillsSection) {
      observer.observe(this.skillsSection.nativeElement);
    }
  }
}
