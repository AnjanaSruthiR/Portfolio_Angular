import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class AboutComponent {
  isOpen = false;

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

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  testimonials: Testimonial[] = [
    {
      name: 'Yogendranath Gujarathi',
      position: 'Senior Manager at Accenture',
      content: `I’m delighted to recommend Anjana Sruthi Ranga. I worked closely with her at Accenture, where she excelled as an Application Developer. 

Anjana consistently showcased strong analytical skills, creativity, and exceptional talent in application design with meticulous attention to detail. She’s proactive, collaborative, and brings a positive attitude to every team. 
      
Anjana’s commitment and talent make her an exceptional candidate for any professional pursuit.`
    },
    {
      name: 'Praise Shimosha',
    position: 'Consulting Development Analyst at Accenture',
    content: `I had the pleasure of working on a project with Anjana for over a year at Accenture, where I served as the business analyst while Anjana was a member of our development team. During our time on the project, Anjana consistently demonstrated exceptional coding skills and the ability to effectively communicate with stakeholders to resolve issues. She excelled in team collaboration and took on the responsibility of leading other junior developers, eventually becoming the lead support developer for our team's project.

On a personal level, Anjana is highly responsible, quick to grasp complex problems, and open to constructive criticism and making necessary changes. Her flexibility in adapting to changing situations is commendable. I would highly recommend Anjana as a great candidate for any role!`
  },
  ];
}
